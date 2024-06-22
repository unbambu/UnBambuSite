import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';  
import { OnExecuteData, ReCaptchaV3Service } from "ng-recaptcha";
import { Contact } from '@core/models/contact';
import { ContactService } from '@core/services/contact.service';
import { endpoints, environment } from '@environments/index';
import { SnackbarComponent } from '../snackbar/snackbar.component'

import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import {TranslateService} from "@ngx-translate/core";

/** Error when invalid control is dirty, touched. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;    
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnChanges, OnDestroy 
{

  
 
  @Input() parentData: any;
  reCAPTCHAToken: string = "";
  private sub: Subscription = new Subscription
  tokenVisible: boolean = false;
  selectedSubject = '';
  Name = new FormControl({value: "", disabled: false}, [
      Validators.required
  ]);
  Email = new FormControl('', [
    Validators.required,    
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
 /* Subject = new FormControl({value: this.selectedSubject, disabled: false}, [
    Validators.required
  ]);*/
  Subject = new FormControl('', [Validators.required]);
  Message = new FormControl({value: "", disabled: false}, [
    Validators.required
  ]);
  LinkedIn = new FormControl({value: "", disabled: false}, [    
  ]);
  Phone = new FormControl({value: "", disabled: false}, [    
  ]);
  contactForm: FormGroup = new FormGroup({});  
  durationInSeconds = 5;
  message = '';
  saving: boolean = false;
 

  constructor(private recaptchaV3Service: ReCaptchaV3Service,
    private contactService: ContactService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
    public snackBar: MatSnackBar) 
  {

  }
    ngOnInit() {
      this.setForm();
  }


  
  setForm() {
    this.contactForm = new FormGroup({
      Name: this.Name, 
      Email: this.Email,
      LinkedIn: this.LinkedIn,
      Phone: this.Phone,
      Subject: this.Subject,
      Message: this.Message
   });
  }

  setValidators() {   
    this.setForm()
    this.contactForm.updateValueAndValidity(); 
  }

  ngOnChanges(changes: SimpleChanges) {
    
    this.Subject = new FormControl('', [Validators.required]);
    this.setValidators();
  }
 
  onSubmit(): void { 

    if (!this.contactForm.valid) {
      console.log("InValid")
      return;
    }
    console.log("Valid")
    this.saving = true;
    
    /*let ele = document.getElementById('svgspinner') as any;
    ele.classList.toggle('show');  */

    this.translate.get('Message.description').subscribe((res: string) => {
        this.message = res;       
    });
    var contact = new Contact();
    contact = {
      ...contact,
      ...this.contactForm.value,
    };
    contact.recaptcha = '';
    this.contactService
    .addmessage(contact)
    .subscribe(
      {
        complete: () => {
          console.log('Send Ok...');
          this.contactForm.reset();
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: this.durationInSeconds * 1000,
            data: {
              html: this.message
            }
          });
          this.saving = false;
         
        }
      }
    );
    
/*
    let sub = this.recaptchaV3Service.execute(environment.recaptcha.action)
    .subscribe((token: string) => {
      console.log(`Token [${token}] generated`);  
      
      var contact = new Contact();
        contact = {
          ...contact,
          ...this.contactForm.value,
        };
        contact.recaptcha = token;
      
        this.contactService
        .addmessage(contact)
        .subscribe(
          {
            complete: () => {
              console.log('Send Ok...');
              this.contactForm.reset();
              this.snackBar.openFromComponent(SnackbarComponent, {
                duration: this.durationInSeconds * 1000,
                data: {
                  html: this.message
                }
              });
              this.saving = false;
             
            }
          }
        );
      
    });
  
    */
  } 
  matcher = new MyErrorStateMatcher();

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
      console.log("unsubscribe")
    }
  }

}


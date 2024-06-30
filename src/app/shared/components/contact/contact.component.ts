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
import { Contact, Greetings } from '@core/models/contact';
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
  Description = new FormControl({value: "", disabled: false}, [
    Validators.required
  ]);
  LinkedIn = new FormControl({value: "", disabled: false}, [    
  ]);
  Phone = new FormControl({value: "", disabled: false}, [    
  ]);
  contactForm: FormGroup = new FormGroup({});  
  durationInSeconds = 5 * 1000;
  message = '';   
  Greetings!: 
  {    
    A: string
    B: string    
    C: string
  };
  Fields!: 
  {    
    Name: string;
    Email: string;
    Subject: string;
    LinkedIn: string;
    Phone: string;
    Message: string;
  };


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
      Description: this.Description
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
   
    this.translate.get('Message.description').subscribe((res: string) => {
        this.message = res;       
    });
    

    this.translate.get([
      'Contact.Greetings.A',
      'Contact.Greetings.B',
      'Contact.Greetings.C',
      'Contact.Placeholder.Name',
      'Contact.Placeholder.Email',
      'Contact.Placeholder.Subject',
      'Contact.Placeholder.LinkedIn',
      'Contact.Placeholder.Phone',
      'Contact.Placeholder.Message'

    ]).subscribe((res) => {      
     
      this.Greetings = 
      {
        A: res['Contact.Greetings.A'],
        B: res['Contact.Greetings.B'],
        C: res['Contact.Greetings.C'],
      };
      this.Fields = 
      {
        Name: res['Contact.Placeholder.Name'],
        Email: res['Contact.Placeholder.Email'],
        Subject: res['Contact.Placeholder.Subject'],
        LinkedIn: res['Contact.Placeholder.LinkedIn'],
        Phone: res['Contact.Placeholder.Phone'],
        Message: res['Contact.Placeholder.Message'],
      };

    });

    var contact = new Contact();
    contact.Main = {
      ...contact.Main,
      ...this.contactForm.value,
    };

    contact.Greetings = this.Greetings;
    contact.Fields = this.Fields;
    contact.Main.recaptcha = "";

    this.contactService
    .addmessage(contact)
    .subscribe({
   
      error:(err) => {
       
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.durationInSeconds,
          data: {
            html: 'something wrong occurred'
          }
        });
        this.saving = false;
        
      },
      complete: () => {
        console.log('Send Ok...');
          this.contactForm.reset();
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: this.durationInSeconds,
            data: {
              html: this.message
            }
          });
          this.saving = false;
      },
    });      

  

  /*  let sub = this.recaptchaV3Service.execute(environment.recaptcha.action)
    .subscribe({ 
      next:(token: string) => {      
      console.log(`Token [${token}] generated`);  

      var contact = new Contact();
      contact.Main = {
        ...contact.Main,
        ...this.contactForm.value,
      };

      contact.Greetings = this.Greetings;
      contact.Fields = this.Fields;
      contact.Main.recaptcha = token;

      this.contactService
      .addmessage(contact)
      .subscribe({
     
        error:(err) => {
         
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: this.durationInSeconds,
            data: {
              html: 'something wrong occurred'
            }
          });
          this.saving = false;
          
        },
        complete: () => {
          console.log('Send Ok...');
            this.contactForm.reset();
            this.snackBar.openFromComponent(SnackbarComponent, {
              duration: this.durationInSeconds,
              data: {
                html: this.message
              }
            });
            this.saving = false;
        },
      });      
    },
    error:(err) => {      
     
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds,
        data: {
          html: 'Token Error ' 
        }
      });
      this.saving = false;
    },
    complete:() => {
     
    },
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


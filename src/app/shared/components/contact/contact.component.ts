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

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
 /* standalone: true,
  imports: [NgClass],*/
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
  constructor(private recaptchaV3Service: ReCaptchaV3Service,
    private contactService: ContactService) 
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
    console.log(changes)
    this.Subject = new FormControl('', [Validators.required]);
    this.setValidators();
  }


  onSubmit(): void { 

   /* const element = document.getElementsByClassName('grecaptcha-badge')[0] as HTMLElement;
    console.log('element ', element);
    if (element) {
      element.style.visibility = 'visible';
    }*/

    
    
    let sub = this.recaptchaV3Service.execute('UnBambuMessage')
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
             
            }
          }
        );
      
    });
    if (this.contactForm.invalid) {
      console.log("InValid")
      return;
    }
    console.log("Valid")
    // continue work here
  } 
  matcher = new MyErrorStateMatcher();

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
      console.log("unsubscribe")
    }
  }

}


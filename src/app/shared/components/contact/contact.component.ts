import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
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
import { ReCaptchaV3Service } from 'ng-recaptcha';


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
export class ContactComponent implements OnInit, OnChanges 
{

 
  @Input() parentData: any;
  reCAPTCHAToken: string = "";
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
  constructor(private recaptchaV3Service: ReCaptchaV3Service) 
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

  /*public send(): void {
   

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }*/

  onSubmit(): void { 
    if (this.contactForm.invalid) {
      console.log("InValid")
      return;
    }
    console.log("Valid")
    // continue work here
  } 
  matcher = new MyErrorStateMatcher();

}

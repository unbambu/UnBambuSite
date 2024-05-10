import { Component, OnInit } from '@angular/core';
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

/** Error when invalid control is dirty, touched, or submitted. */
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

@Component({
  selector: 'app-contact',
 /* standalone: true,
  imports: [NgClass],*/
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  
 Name = new FormControl({value: "", disabled: false}, [
    Validators.required
  ]);

  Email = new FormControl('', [
    Validators.required,    
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);

  Subject = new FormControl({value: "", disabled: false}, [
    Validators.required
  ]);

  Message = new FormControl({value: "", disabled: false}, [
    Validators.required
  ]);

  LinkedIn = new FormControl({value: "", disabled: false}, [
    
  ]);

  Phone = new FormControl({value: "", disabled: false}, [
    
  ]);
  
 contactForm: FormGroup = new FormGroup({
    Name: this.Name, 
    Email: this.Email,
    LinkedIn: this.LinkedIn,
    Phone: this.Phone,
    Subject: this.Subject,
    Message: this.Message
 });

  ngOnInit() {
    
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }
    console.log("Valid")
    // continue work here
  }
 
  //matcher = new MyErrorStateMatcher();


}

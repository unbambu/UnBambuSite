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
  
 name = new FormControl({value: "", disabled: false}, [
    Validators.required
  ]);

  email = new FormControl('', [
    Validators.required
  ]);
  
 contactForm: FormGroup = new FormGroup({
    name: this.name, 
    email: this.email
 });

  ngOnInit() {
    
  }
 
  //matcher = new MyErrorStateMatcher();


}

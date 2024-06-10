import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {  MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';



@Component({
  selector: 'app-snackbar', 
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
    
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBar: MatSnackBar) 
  {

  }

}

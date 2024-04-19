import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';


import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconRegistry } from "@angular/material/icon";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
    
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,    
    MatExpansionModule,
    MatRadioModule,
    MatMenuModule,
    
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSlideToggleModule,
  
    
  ],  
  providers: [MatIconRegistry],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,    
    MatExpansionModule,
    MatRadioModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSnackBarModule,    
    MatMenuModule,
    MatSlideToggleModule,
  
  ],
})
export class MaterialModule { }

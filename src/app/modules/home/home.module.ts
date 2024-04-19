import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './routing/home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    
    CommonModule,
    HomeRoutingModule,
    SharedModule,
   
    
   
  ],
  exports: [
    HomeComponent
    
  ],
  
})
export class HomeModule { }

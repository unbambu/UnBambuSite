import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyComponent } from './components/why/why.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateParser} from '@ngx-translate/core';
import { TranslateApp } from './services/translate.service';
import { TranslateAppParser } from './services/translateparser.service';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';


@NgModule({
  declarations: [  
    HomeComponent,  
    AboutComponent,
    ServicesComponent,
    WhyComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SwitcherComponent

  ],
  imports: [
    CommonModule,    
    FormsModule,
    MaterialModule,
    TranslateModule.forChild({
      
      loader: {       
          provide: TranslateLoader,
          useClass:TranslateApp
         
      },
      parser: { 
        provide: TranslateParser, 
        useClass:TranslateAppParser        
      
      }
    })
    
  
    
  ],
  providers: [   
    TranslateApp,
    TranslateAppParser,
    TranslateModule

  ],
  exports: [    
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WhyComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SwitcherComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }

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
import { TogglemodeComponent } from './components/togglemode/togglemode.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateParser} from '@ngx-translate/core';
import { TranslateApp } from './services/translate.service';
import { TranslateAppParser } from './services/translateparser.service';
import { FormsModule, ReactiveFormsModule,  NG_VALUE_ACCESSOR } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { environment } from '../../environments/environment';
import { SnackbarComponent } from './components/snackbar/snackbar.component'

@NgModule({
  declarations: [  
    HomeComponent,  
    AboutComponent,
    ServicesComponent,
    WhyComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SwitcherComponent,
    TogglemodeComponent,
    SnackbarComponent

  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,    
    MaterialModule,
    RecaptchaV3Module,
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
    TranslateModule,
    { provide: RECAPTCHA_V3_SITE_KEY, 
      useValue: environment.recaptcha.siteKey 
    }
   /* {
      provide: NG_VALUE_ACCESSOR,      
      useExisting: forwardRef(() => MatFormFieldControl),
      multi: true,
    },*/

  ],
  exports: [    
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WhyComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SwitcherComponent,
    TogglemodeComponent,
    SnackbarComponent
  ],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }

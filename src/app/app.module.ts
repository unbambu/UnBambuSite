import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule,NgControl } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';

import { provideRouter } from '@angular/router';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { ConfigService } from './shared/services/config.service';
import {TranslateLoader, TranslateModule,TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';


/*export const routes: Routes = [];*/


export function initializeApp(config: ConfigService) {
  return () => config.loadAppConfig()
}


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SvgIconComponent, 
    MaterialModule,
    SharedModule,
    
    
    TranslateModule.forRoot({    
      loader: {       
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
     
  }),
 
  ],
  providers: [
    provideAngularSvgIcon(),
   
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

export const routes: Routes = [];

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
    SvgIconComponent, 
    MaterialModule,
    SharedModule,
    TranslateModule.forRoot({    
      loader: {       
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
     
  })
  
    
  ],
  providers: [provideAngularSvgIcon()],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }



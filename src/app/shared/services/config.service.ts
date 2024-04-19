import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom, catchError, retry, throwError } from 'rxjs';
import {tap, map} from 'rxjs/operators';
import { Component, OnInit, isDevMode } from '@angular/core';

import { ConfigState } from  '../interfaces/config-state';
import { Config } from  '../interfaces/config';

const initialState: ConfigState = {
  isLoaded: false,
  data: null,
};

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private appConfig: any;
  private file: string = "";
  private http : HttpClient;
  private readonly state = new BehaviorSubject<ConfigState>(initialState);
  public readonly state$ = this.state.asObservable();
  // Just to show it is not sync for everyone
  public config: Config | null = null;

  constructor(http: HttpClient) {
    this.http = http;
   }

   
  loadAppConfig(): Observable<Config> {

      if (isDevMode()) {       
        this.file = '../assets/config/app-settings.dev.json'
      } else {
        this.file = '../assets/config/app-settings.json'
      }

      return this.http.get<Config>(this.file ).pipe(
          tap((config) => {
            console.log(`[ConfigService]: config value ${JSON.stringify(config)}`);
            this.appConfig = config;
            this.state.next({ isLoaded: true, data: config });
          })
        );


  }

  public get apiBaseUrl() : string {
    return this.appConfig.apiBaseUrl;
  }

 
}

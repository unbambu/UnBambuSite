import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  constructor() { }

  handleError(error: any) {
    // Do what you want here, but throw it so that it's visible on the console!
    throw new Error(error);
  }
}

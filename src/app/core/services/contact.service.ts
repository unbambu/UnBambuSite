import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints, environment } from '@environments/index';
import { Contact } from '@core/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public addmessage(entity: Contact) {
    return this.http.post(
      `${environment.apiUrl}/${endpoints.messages.main}/${endpoints.messages.addmessage}`,
      entity
    );
  }

}

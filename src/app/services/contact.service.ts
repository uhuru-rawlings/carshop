import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:any = 'https://carapis.herokuapp.com/user/contacts/'
  test:any = 'https://carapis.herokuapp.com/user/testdrive/'
  constructor(private http:HttpClient) { }

  contactUs(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }

  bookDrive(details:any):Observable<any>{
    return this.http.post(this.test, details)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:any = 'https://carapis.herokuapp.com/account/register'
  constructor(private http:HttpClient) { }

  createUser(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }
}

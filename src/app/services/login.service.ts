import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'https://carapis.herokuapp.com/account/login'
  constructor(private http:HttpClient) { }
  
  loginUser(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  url:any = 'https://carapis.herokuapp.com/account/resetpassword'
  constructor(private http:HttpClient) { }

  restPassword(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url:any = 'https://carapis.herokuapp.com/cars/models/'
  constructor(private http:HttpClient) { }

  carModels():Observable<any>{
    return this.http.get(this.url)
  }
}

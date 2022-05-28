import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url:any = 'https://carapis.herokuapp.com/cars/models/'
  url_cars:any = 'https://carapis.herokuapp.com/cars/cars/'
  constructor(private http:HttpClient) { }

  carModels():Observable<any>{
    return this.http.get(this.url)
  }

  getCars():Observable<any>{
    return this.http.get(this.url_cars)
  }
}

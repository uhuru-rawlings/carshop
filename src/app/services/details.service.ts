import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  item:any;
  constructor() { }

  getItmes(items:any){
    this.item = items
  }
}

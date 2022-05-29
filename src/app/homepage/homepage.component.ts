import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  models:any;
  cars:any;
  images:any;
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.carModels()
  }
  

  carModels(){
    this.homeservice.carModels().subscribe((data) => {
      this.models = data
      console.log(data)
    })
    this.homeservice.getCars().subscribe((data)=> {
      this.cars = data
    })
    this.homeservice.getImages().subscribe((data) => {
      this.images = data
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent implements OnInit {
  cars:any;
  images:any;
  carmodels:any;
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.setCars()
  }

  onChangeSort(event:any){
     let values = event.target.value
     if(values){
      let filter_array:any = []
      this.images.forEach((item:any) => {
        if(item.car_id.carmodel.modelname == values){
          filter_array.push(item)
          this.cars = filter_array
        }
      })
     }
  }

  setCars(){
    this.homeservice.getCars().subscribe((data) =>{
      this.cars = data
    })
    this.homeservice.getImages().subscribe((data) => {
      this.images = data
      this.carmodels = data
    })
    // this.homeservice.carModels().subscribe((data) => {
    //   this.carmodels = data
    // })
  }
}

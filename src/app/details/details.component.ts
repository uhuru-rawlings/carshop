import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  image:any;
  drivedate:any;
  driver:any;
  shows:any = ''
  success:any = ''
  constructor(private detailsservice:DetailsService, private toastr:ToastrService, private contactsservice:ContactService) { }
  ngOnInit(): void {
    this.setItems()
  }

  setItems(){
    this.image = this.detailsservice.item
  }
  showForms(){
    this.shows = 'show'
  }
  hideForms(){
    this.shows = ''
  }

  bookTestDrive(){
    if(this.drivedate === '' || this.driver === ''){
      this.toastr.error("Please fillout all required fields.")
    }else{
      console.log(this.image.car_id.id)
      let details = {
        "user": 1,
        "cars": this.image.car_id.id,
        "drivedate" : this.drivedate,
        "driver": this.driver,
      }
      this.contactsservice.bookDrive(details).subscribe((data)=> {
        this.toastr.success(data.success)
        this.success = data.success
      })
    }
    
  }
}

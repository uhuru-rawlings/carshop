import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phonenumber:any = '';
  useremail:any = '';
  messages:any = '';
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  validateContact(){
    if(this.phonenumber === '' || this.useremail === ''|| this.messages === ''){
      this.toastr.error("please fill all required fields.")
    }else{
      let details:any = {
          'useremail': this.useremail,
          'phonenumber': this.phonenumber,
          'message':this.messages
      }
    }
  }
}

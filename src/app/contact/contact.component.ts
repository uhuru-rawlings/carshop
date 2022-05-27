import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  username:any = '';
  useremail:any = '';
  messages:any = '';
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  validateContact(){
    if(this.username === '' || this.useremail === ''|| this.messages === ''){
      this.toastr.error("please fill all required fields.")
      
    }
  }
}

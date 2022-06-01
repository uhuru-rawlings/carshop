import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phonenumber:any = '';
  useremail:any = '';
  messages:any = '';
  success:any =''
  constructor(private toastr:ToastrService, private contactservice:ContactService) { }

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
      this.contactservice.contactUs(details).subscribe((data) => {
        if(data.success){
          this.toastr.success(data.success)
          this.success = data.success
          this.phonenumber = ''
          this.useremail = ''
          this.messages = ''
        }
      })
    }
  }
}

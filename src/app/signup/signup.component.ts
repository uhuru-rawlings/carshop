import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  useremails:any = ''
  username:any = ''
  passwords:any = ''
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  validateLogin(){
    if(this.useremails === '' || this.passwords === '' || this.username === ''){
      this.toastr.error("please fill in the required details.")
    }else{
      let details:any= {
        'username':this.username,
        'useremail':this.useremails,
        'passwords':this.passwords
      }
    }
  }
}

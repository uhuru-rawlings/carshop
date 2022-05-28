import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  useremails:any = ''
  username:any = ''
  passwords:any = ''
  success:any = ''
  error:any = ''
  constructor(private toastr:ToastrService, private signupservice:SignupService) { }

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
      this.signupservice.createUser(details).subscribe((data) =>{
        if(data.success){
          this.success = data.success
        }else{
          this.error = data.error
        }
      })
    }
  }
}

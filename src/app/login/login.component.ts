import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useremails:any = ''
  passwords:any = ''
  error:any=''
  constructor(private toastr:ToastrService, private logins:LoginService, private router:Router, private cookie:CookieService) { }

  ngOnInit(): void {
  }

  validateLogin(){
    if(this.useremails === '' || this.passwords === ''){
      this.toastr.error("username and password required to login.")
    }else{
      let details:any= {
        'useremail':this.useremails,
        'passwords':this.passwords
      }
      this.logins.loginUser(details).subscribe((data) => {
        if(data.error){
          this.error = data.error
        }else{
          this.cookie.set("jwttoken", JSON.stringify(data.token))
          this.router.navigate(['/'])
        }
      })
    }
  }
}

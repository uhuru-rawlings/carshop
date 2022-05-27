import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useremails:any = ''
  passwords:any = ''
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  validateLogin(){
    if(this.useremails === '' || this.passwords === ''){
      this.toastr.error("username and password required to login.")
    }
  }
}

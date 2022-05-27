import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  useremails:any = ''
  cpasswords:any = ''
  passwords:any = ''
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  validateLogin(){
    if(this.useremails === '' || this.passwords === '' || this.cpasswords === ''){
      this.toastr.error("please fill in the required details.")
    }else{
      if(this.passwords != this.cpasswords){
        this.toastr.error("password provided dont match try again.")
      }
    }
  }
}

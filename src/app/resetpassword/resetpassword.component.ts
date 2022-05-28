import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResetService } from '../services/reset.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  useremails:any = ''
  cpasswords:any = ''
  passwords:any = ''
  error:any =''
  success:any = ''
  constructor(private toastr:ToastrService,private reset:ResetService) { }

  ngOnInit(): void {
  }

  validateLogin(){
    if(this.useremails === '' || this.passwords === '' || this.cpasswords === ''){
      this.toastr.error("please fill in the required details.")
    }else{
      if(this.passwords != this.cpasswords){
        this.toastr.error("password provided dont match try again.")
      }else{
        let details:any= {
          'useremail':this.useremails,
          'passwords':this.passwords
        }
        this.reset.restPassword(details).subscribe((data) =>{
          if(data.success){
            this.success = data.success
          }else{
            this.error = data.error
          }
        })
      }
    }
  }
}

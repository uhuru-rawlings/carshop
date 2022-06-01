import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { YardComponent } from './yard/yard.component';
import { DetailsComponent } from './details/details.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'contact',component:ContactComponent},
  {path:'yard',component:YardComponent},
  {path:'details',component:DetailsComponent},
  {path:'payments',component:PaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingLinks = [LoginComponent,SignupComponent,ResetpasswordComponent,HomepageComponent,ContactComponent,YardComponent,DetailsComponent,PaymentsComponent]

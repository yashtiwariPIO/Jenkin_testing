import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { Dashboard1Component } from './dashboard1/dashboard1.component';



const routes: Routes = [
  {path:'dashboard1', component:Dashboard1Component},
  {path:'login', component:LoginComponent},
  {path:'forget-pass', component:ForgetPassComponent},
  {path:'logout', component:LogoutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

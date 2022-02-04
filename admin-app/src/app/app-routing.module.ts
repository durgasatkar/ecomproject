import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate :[AuthGuardGuard]
  },
  {
    path:"newproduct",
    component:NewproductComponent,
    canActivate :[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

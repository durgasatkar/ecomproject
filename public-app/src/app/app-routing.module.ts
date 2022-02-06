import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"allProducts",
    component: ProductComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"cart",
    component: ContactComponent,
    canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

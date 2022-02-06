import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

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
  },
  {
    path:"allProducts",
    component:ProductComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:"update/:id",
    component : UpdateProductComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:"contact",
    component: ContactComponent,
    canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

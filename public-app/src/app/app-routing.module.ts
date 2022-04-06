import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

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
    component: CartComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"checkout",
    component: CheckoutComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:"invoice/:id",
    component: InvoiceComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:"myorder",
    component: MyordersComponent,
    canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

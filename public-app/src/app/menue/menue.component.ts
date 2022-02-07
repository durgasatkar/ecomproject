import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartService } from '../cart.service';
import { CartItem, Product } from '../interfaces.def';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

activate:boolean = false ;
host: string = environment.host;

list : CartItem[] = [];

scroll = (): void => {
 this.activate = false ;
  //handle your scroll here
  //notice the 'odd' function assignment to a class field
  //this is used to be able to remove the event listener
};
  classactivate(){
    console.log(this.activate)
    if(this.activate){
      this.activate= false;
    }
    else{this.activate= true;}
    
  }
  classdeactivate(){
    console.log(this.activate)
      this.activate= false;
    
  }
  navbarOpen = false;
 
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLoggedIn(): boolean{
    if(this.session.getToken()){
      return true;
    }
    return false;
  }

  logout(){
    this.session.deleteToken();
    this.router.navigateByUrl("login");
  }
  constructor(private session: SessionService,
    private router: Router,private cart: CartService) {  
   }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.list = this.cart.getItems();
  }

  getDiscountedPrice(p: Product){
    return p.price - (p.price * p.discount / 100);
  }

  getPrice(){
    return this.cart.calculatePrice();
  }

  onDelete(e: Product){
    
  }

  getCartCount(){
    return this.cart.getCount();
  }
}

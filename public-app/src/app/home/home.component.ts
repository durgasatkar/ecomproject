import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Product } from '../interfaces.def';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList : Product[]= [];
  host: string = environment.host;

  constructor( private api: ApiService,private cart: CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
      this.productList = data;
    });
  }

  getDiscountedPrice(p: Product){
    return p.price - (p.price * p.discount / 100);
  }
  
  add(p: Product){
    this.cart.addToCart(p,1);
  }
}

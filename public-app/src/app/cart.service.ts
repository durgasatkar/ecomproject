import { Injectable } from '@angular/core';
import { CartItem, Product } from './interfaces.def';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  constructor() { 
    this.cartItems = JSON.parse(localStorage.getItem('shoppingCartItems') || '[]');
  }

  addToCart(p:Product, qty:number){
    this.cartItems.push({product:p,qty:qty});
    this.save();
  }
updatecart(i:number,no:number){
  this.cartItems[i].qty=no ;
  this.save();
}
  getCount(){
    return this.cartItems.length;
  }

  getItems(){
    return this.cartItems;
  }

  removeFromCart(){

  }

  getDiscountedPrice(p: Product){
    return p.price - (p.price * p.discount / 100);
  }
  getsingletotal(p: Product,qty:number){
    return (p.price - (p.price * p.discount / 100))*qty;
  }

  calculatePrice(){
    let price = 0;
    this.cartItems.forEach(itm=>{
      price += this.getsingletotal(itm.product,itm.qty)
    });
    return price;
  }

  save(){
    localStorage.setItem('shoppingCartItems', JSON.stringify(this.cartItems));
  }}

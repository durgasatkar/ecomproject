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

  removeFromCart(p: Product){
    let index = -1;
    for(let i=0;i< this.cartItems.length;i++){
      if(this.cartItems[i].product.id === p.id){
        index = i;
      }
    }

    if(index > -1){
      this.cartItems.splice(index,1);
      this.save();
    }
  }

  clearCart(){
    this.cartItems = [];
    this.save();
    // localStorage.removeItem('shoppingCartItems');
  }
  getDiscountedPrice(p: Product){
    return p.price - (p.price * p.discount / 100);
  }
  getsingletotal(p: any,qty:number){
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

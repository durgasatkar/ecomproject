import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userInfo: any = {};
  constructor(private cart: CartService, private api: ApiService) { }

  ngOnInit(): void {
    this.api.profile().subscribe(data=>{
      this.userInfo = data;
    })
  }

  getPrice(){
    return this.cart.calculatePrice();
  }
}

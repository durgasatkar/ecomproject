import { Component, OnInit, QueryList } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CartService } from '../cart.service';
import { CartItem, Product } from '../interfaces.def';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form = this.formBuilder.group({
   quantity1:[Validators.required],
  });


  host: string = environment.host;

  list : CartItem[] = [];

  searchText: number=0;
  quantity:number =0;

  recordsToShow : Product[] = [];

  constructor(private cart: CartService,private formBuilder: FormBuilder) {
  }

  search(i:number) {
    this.quantity=this.form.controls["quantity1"].value ;
    console.log(this.quantity)
    this.cart.updatecart(i,this.quantity);
    // this.list[i].qty=this.quantity ;
  }
  ngOnInit(): void {
    this.list = this.cart.getItems();
  }

  getDiscountedPrice(p: Product){
    return p.price - (p.price * p.discount / 100);
  }
  getsingletotal(p: Product,qty:number){
    return (p.price - (p.price * p.discount / 100))*qty;
  }

  getPrice(){
    return this.cart.calculatePrice();
  }

  onDelete(e: Product){
    
  }

}

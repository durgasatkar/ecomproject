import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { CartItem } from '../interfaces.def';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userInfo: any = {};
  cartItems: CartItem[] = [];
  paymentMethod : string = 'cod';
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    addressType: ['', [Validators.required]],
    addrLine1: ['', [Validators.required]],
    addrLine2: ['', [Validators.required]],
    area: ['', [Validators.required]],
    landmark: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pin: ['', [Validators.required]]
  });
  isSubmited: boolean = false;

  constructor(private cart: CartService, private api: ApiService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cart.getItems();
    this.api.profile().subscribe(data=>{
      this.userInfo = data;
    })
  }

  getPrice(){
    return this.cart.calculatePrice();
  }

  isError(field: string): boolean{
    return this.form.controls[field].invalid && (this.isSubmited || this.form.controls[field].dirty || this.form.controls[field].touched)
  }

  setPaymentMethod(method:string){
    this.paymentMethod = method;
  }

  onSubmit(){
    this.isSubmited = true;
    if(this.form.valid){
      let data = {...this.form.value, user: this.userInfo};
      //Create Address
      this.api.createAddress(data).subscribe((data: any)=>{
        if(data){
          console.log(data);
          // Create Order
          let orderData = {
            status: 1,
            orderType: this.paymentMethod,
            orderAmount: this.getPrice(),
            user: this.userInfo,
            address: data,
            orderDetails: this.cartItems.map((item : CartItem) => { return{name: item.product.name, price: item.product.price, discount: item.product.discount, quantity: item.qty}})
          };
          this.api.createOrder(orderData).subscribe((odData: any)=>{
            this.cart.clearCart();
            this.router.navigateByUrl("/myorder");
          });
        }
      });
    }
  }
}

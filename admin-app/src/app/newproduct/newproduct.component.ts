import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  productform = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]],
    discount: ['', [Validators.required]],
    rating: [5],
    quantity: ['', [Validators.required]],
  });
  isSuccess = false;
  isSubmited = false;
  isInvalid = false;

  constructor(private api: ApiService, private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  isError(field: string): boolean{
    return this.productform.controls[field].invalid && (this.isSubmited || this.productform.controls[field].dirty || this.productform.controls[field].touched)
  }

  onSubmit(){
    
    this.isSuccess = false;
    this.isSubmited = true;
    this.isInvalid = false;
    if(this.productform.valid){
      this.api.createProduct(this.productform.value).subscribe((data: any)=>{
        this.isSuccess = true;
      });
    }else{
      console.log("Please provide valid information");
    }
    
  }
}

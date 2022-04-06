import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productform = this.formBuilder.group({
    id:[''],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    fileSource: ['', [Validators.required]],
    price: ['', [Validators.required]],
    discount: ['', [Validators.required]],
    rating: [5],
    quantity: ['', [Validators.required]],
  });

  isSuccess = false;
  isSubmited = false;
  isInvalid = false;

  constructor(private api: ApiService, private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log();
    let id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.api.getspecificproduct(parseInt(id)).subscribe((data)=>{
        console.log("Data", data);
        this.productform.controls['id'].setValue(data.id);
        this.productform.controls['name'].setValue(data.name);
        this.productform.controls['description'].setValue(data.description);
        // this.productform.controls['image'].setValue(data.image);
        this.productform.controls['price'].setValue(data.price);
        this.productform.controls['discount'].setValue(data.discount);
        this.productform.controls['quantity'].setValue(data.quantity);
      });
    }
  }

  isError(field: string): boolean{
    return this.productform.controls[field].invalid && (this.isSubmited || this.productform.controls[field].dirty || this.productform.controls[field].touched)
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productform.patchValue({
        fileSource: file
      });
    }
  }

  onSubmit(){
    this.isSuccess = false;
    this.isSubmited = true;
    this.isInvalid = false;
    if(this.productform.valid){
      //Upload image
      const formData = new FormData();
      formData.append('image', this.productform.get('fileSource')?.value);
      this.api.uploadImage(formData).subscribe((data:any)=>{
        if(data && data.filename){
          // Collect image path
          let product = this.productform.value;
          delete product.fileSource;
          product.image = data.filename;
          // Create product
          this.api.createProduct(product).subscribe((data: any)=>{
            this.isSuccess = true;
            this.productform.reset();
            this.isSubmited = false;
          });
        }else{
          this.isSuccess = false;
        }
      });
    }else{
      console.log("Please provide valid inproductproductformation");
    }
    
  }
}

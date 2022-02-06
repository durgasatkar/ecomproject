import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  cntform = this.formBuilder.group({
    name: ['', [Validators.required]],
    contactNo: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    query: ['', [Validators.required]]
  });
  isSuccess = false;
  isSubmited = false;
  isInvalid = false;

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  isError(field: string): boolean{
    return this.cntform.controls[field].invalid && (this.isSubmited || this.cntform.controls[field].dirty || this.cntform.controls[field].touched)
  }

  onSubmit(){
    this.isSuccess = false;
    this.isSubmited = true;
    this.isInvalid = false;
    if(this.cntform.valid){
      this.api.createContact(this.cntform.value).subscribe((data: any)=>{
        this.isSuccess = true;
        this.cntform.reset();
        this.isSubmited = false;
      });
    }
      
  }

}

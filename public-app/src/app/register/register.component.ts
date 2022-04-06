import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
    role: [10, [Validators.required]],
    password: ['', [Validators.required]],
  });
  isSuccess = false;
  isSubmited = false;
  isInvalid = false;

  constructor(private api: ApiService, private formBuilder: FormBuilder,
    private router: Router, private session: SessionService) { }

  ngOnInit(): void {
    if(this.session.getToken()){
      this.router.navigateByUrl("/home");
    }
  }

  isError(field: string): boolean{
    return this.form.controls[field].invalid && (this.isSubmited || this.form.controls[field].dirty || this.form.controls[field].touched)
  }

  onSubmit(){
    
    this.isSuccess = false;
    this.isSubmited = true;
    this.isInvalid = false;
    if(this.form.valid){
      this.api.register(this.form.value).subscribe((data: any)=>{
        this.router.navigateByUrl("/login");
      });
    }else{
      console.log("Please provide valid information");
    }
    
  }

}

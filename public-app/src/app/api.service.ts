import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact, Product } from './interfaces.def';

import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,
    private session: SessionService) {
  }

  login(cred: any){
    return this.httpClient.post( environment.host+'/auth/login',cred);
  }

  uploadImage(formData: FormData){
    return this.httpClient.post(environment.host+'/uploadFile',formData);
  }

  createProduct(prd: any){
    //{ headers:{'Authorization': 'Bearer '+this.session.getToken()}}
    return this.httpClient.post(environment.host+'/product',prd);
  }

  createContact(prd: any){
    //{ headers:{'Authorization': 'Bearer '+this.session.getToken()}}
    return this.httpClient.post(environment.host+'/contact',prd);
  }

  getProducts(){
    return this.httpClient.get<Product[]>(environment.host+'/product');
  }

  getContacts(){
    return this.httpClient.get<Contact[]>(environment.host+'/contact');
  }

  deleteProduct(id:number){
    return this.httpClient.delete<any>(environment.host+'/product/'+id);
  }
}

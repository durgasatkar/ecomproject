import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact, Order, Product } from './interfaces.def';

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

  profile(){
    return this.httpClient.get( environment.host+'/profile');
  }

  register(cred: any){
    return this.httpClient.post( environment.host+'/auth/register',cred);
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

  createAddress(data: any){
    return this.httpClient.post(environment.host+'/address',data);
  }

  createOrder(data: any){
    return this.httpClient.post(environment.host+'/order',data);
  }

  getProducts(){
    return this.httpClient.get<Product[]>(environment.host+'/product');
  }

  getOrder(oId:any){
    return this.httpClient.get<Order>(environment.host+'/order/'+oId);
  }

  getOrders(){
    return this.httpClient.get<Order[]>(environment.host+'/order');
  }

  updateOrder(o:Order){
    return this.httpClient.patch<Order>(environment.host+'/order/'+o.id, o);
  }

  getContacts(){
    return this.httpClient.get<Contact[]>(environment.host+'/contact');
  }

  deleteProduct(id:number){
    return this.httpClient.delete<any>(environment.host+'/product/'+id);
  }
}

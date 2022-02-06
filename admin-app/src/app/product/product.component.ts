import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { Product } from '../interfaces.def';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  host: string = environment.host;

  list : Product[] = [];

  searchText: string = '';

  recordsToShow : Product[] = [];

  filter = new FormControl('');

  search(text: string) {
    const term = text.toLowerCase();
    this.recordsToShow = this.list.filter( (obj)=> {
      return obj.name.toLowerCase().includes(term)
      || obj.id?.toString().toLocaleLowerCase().includes(term)
      || obj.description.toLowerCase().includes(term);
    });
  }

  constructor(private api: ApiService) {
  }


  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
      this.list = data;
      this.recordsToShow = data;
    });
  }

  onDelete(e: Product){
    if(e.id){
      this.api.deleteProduct(e.id).subscribe((data:any)=>{
        this.ngOnInit();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Order } from '../interfaces.def';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  list : Order[] = [];
  userInfo: any = {};
  recordsToShow : Order[] = [];
  constructor(private api: ApiService,private route: ActivatedRoute) {
  }

  search(text: number) {
    const term = text.toString().toLowerCase();
    this.recordsToShow = this.list.filter( (obj)=> {
      return obj.user.id?.toString().toLocaleLowerCase().includes(term)
    });
  }
  ngOnInit(): void {

    this.api.profile().subscribe(data=>{
      this.userInfo = data;
    })
    this.api.getOrders().subscribe((data)=>{
      this.list = data;
this.recordsToShow=this.list
this.search(this.userInfo.id)
    });
  }

  getOrderStatus(status: number){
    switch(status){
      case 0: return `<span class="badge bg-danger">Canceled</span>`;
      case 1: return `<span class="badge bg-primary">Placed</span>`;
      case 2: return `<span class="badge bg-info">Confirmed</span>`;
      case 3: return `<span class="badge bg-warning">Dispatched</span>`;
      case 4: return `<span class="badge bg-success">Delivered</span>`;
    }
    return '<span class="badge bg-secondary">Invalid</span>';
  }

  onUpdateToNext(o: Order){
    o.status = o.status + 1;
    this.api.updateOrder(o).subscribe((data:any)=>{
      this.ngOnInit();
    });
  }

  onCancel(o: Order){
    o.status = 0;
    this.api.updateOrder(o).subscribe((data:any)=>{
      this.ngOnInit();
    });
  }

}

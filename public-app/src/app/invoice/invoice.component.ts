import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Order, Product } from '../interfaces.def';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  od : Order= {"id":8,"status":1,
  "orderType":"cod",
  "orderAmount":376,
  "created_at":new Date(),
  "updated_at":new Date(),
  "orderDetails":[],
  "address":{"id":17,"name":"Prashant Gunjal","addressType":"Home","addrLine1":"1","addrLine2":"Abc","area":"Karvenagr","landmark":"Mediaca;","city":"Pune","pin":"411052"},
  "user":{"id":2,"name":"Test 3","mobile":"8275269127"}};
  constructor(private route: ActivatedRoute,
    private api: ApiService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.api.getOrder(id).subscribe(data=>{
      this.od = data;
    });
  }

  onCancel(){
    this.od.status = 0;
    this.api.updateOrder(this.od).subscribe(data=>{
      this.od = data;
    });
  }

  getDiscountedPrice(p:any){
    return p.price - (p.price * p.discount / 100);
  }
  getsingletotal(p: any,qty:number){
    return (p.price - (p.price * p.discount / 100))*qty;
  }

  getOrderStatus(): string{
    if(this.od.status === 0){
      return `<div class="badge bg-secondary" >
              Order was canceled!
            </div>`;
    }else if(this.od.status === 1){
      return `<div class="badge bg-primary" >
      Order is placed!
    </div>`;
    }else if(this.od.status === 2){
      return `<div class="badge bg-info" >
      Order is confirmed!
    </div>`;
    }else if(this.od.status === 3){
      return `<div class="badge bg-warning" >
      Order is dispatched!
    </div>`;
    }else if(this.od.status === 4){
      return `<div class="badge bg-success" >
      Order is delivered!
    </div>`;
    }
    return 'Invalid State';
  }

  getOrderType(): string{
    if(this.od.orderType === 'cod'){
      return ' Cash on delivery';
    }else if(this.od.orderType === 'pod'){
      return ' Pay on delivery';
    }
    return ' Prepaid (Via Online payment)';
  }


}

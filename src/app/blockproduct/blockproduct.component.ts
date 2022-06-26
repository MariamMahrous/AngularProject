import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartservicesService } from '../services/cartservices.service';
import { OrderservicesService } from '../services/orderservices.service';

@Component({
  selector: 'app-blockproduct',
  templateUrl: './blockproduct.component.html',
  styleUrls: ['./blockproduct.component.css']
})
export class BlockproductComponent implements OnInit {
   order:any ;
  constructor(private orderService:OrderservicesService,
  private route:ActivatedRoute,private router:Router ,customer:CartservicesService) { }
  ngOnInit(): void {
    this.getOrder()
  }
  getOrder(){
    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getid(id).subscribe(
      data =>{
        this.order = data
      }
    )
  }
  allOrders() {
    this.router.navigateByUrl('/order')
  }
  
}


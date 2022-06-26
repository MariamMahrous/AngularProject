import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartservicesService } from '../services/cartservices.service';
import { OrderservicesService } from '../services/orderservices.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  
 order: any ;
 

  constructor(private orderService:OrderservicesService,  private route:ActivatedRoute, private router:Router,private cartservic: CartservicesService) { }

  ngOnInit(): void {
     this.getOrder();
  }
  getOrder(){
   

    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getorder().subscribe(
      data => {
        this.order = data
      }
    )
  }
 
  
  // addToCard(order: Order) {
  //   const orderCart = new CartOrder(order);
  //   this.cartservic.addOrderToCart(orderCart);
  // }


}


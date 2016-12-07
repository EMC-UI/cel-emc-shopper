import {Component, OnInit, Inject} from '@angular/core';
import {CheckoutService} from "../checkout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutService
  orderItems:any[]

  constructor(@Inject(CheckoutService)  checkoutService:CheckoutService,
              private router: Router) {
    this.checkoutService = checkoutService

  }


  ngOnInit() {
     console.debug("hello")
     this.orderItems = this.checkoutService.getCartItems()

  }

  order(){
    this.orderItems = this.checkoutService.checkoutItems()
    this.orderItems = this.checkoutService.getOrderItems()
    this.router.navigate(['/checkout/done'])
  }


}



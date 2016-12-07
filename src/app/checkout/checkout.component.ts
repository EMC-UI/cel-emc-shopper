import {Component, OnInit, Inject} from '@angular/core';
import {CheckoutService} from "../checkout.service";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutService
  orderItems:any[]
  constructor(@Inject(CheckoutService) checkoutService:CheckoutService) {
    this.checkoutService = checkoutService
  }

  ngOnInit() {
    this.orderItems = this.checkoutService.checkoutItems()
  }

  checkout(){
    this.checkoutService.checkoutItems()
  }

}

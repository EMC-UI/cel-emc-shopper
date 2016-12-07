import {Component, OnInit, Inject} from '@angular/core';
import {CheckoutService} from "../checkout.service";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  checkoutService
  orderItems;
  constructor(@Inject(CheckoutService)  checkoutService:CheckoutService) {
    this.checkoutService = checkoutService
  }

  ngOnInit() {
    this.orderItems = this.checkoutService.getOrderItems()
  }

}

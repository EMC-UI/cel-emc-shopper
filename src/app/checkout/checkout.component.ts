import {Component, OnInit, Inject} from '@angular/core';
import {CheckoutService} from "../checkout.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutService
  orderItems:any[]
  cartService
  cartItems:any[]
  constructor(@Inject(CheckoutService)  checkoutService:CheckoutService,
              @Inject(CartService)  cartService:CartService) {
    this.checkoutService = checkoutService
    this.cartService = cartService
  }

  ngOnInit() {
    console.debug("hello")
    //this.orderItems = this.checkoutService.checkoutItems()

  }

  order(){
    this.orderItems = this.checkoutService.checkoutItems()

    let cartItems = this.cartService.getItems('cart')
    console.log(cartItems)

   // this.cartService.removeItemWithKey('order','Pie')

    this.orderItems = this.checkoutService.getOrderItems()

  }


}



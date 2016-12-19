import {Component, OnInit, Inject} from '@angular/core';
import {CheckoutService} from "./checkout.service";
import {Router} from "@angular/router";

export class Recipient {
  constructor(
    public id: number,
    public name: string,
    public good: boolean
  ) {  }
}

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutService
  orderItems:any[]

  model = new Recipient(1, '' , false);

  constructor(@Inject(CheckoutService)  checkoutService:CheckoutService,
              private router: Router) {
    this.checkoutService = checkoutService

  }

  ngOnInit() {
     this.orderItems = this.checkoutService.getCartItems()
    console.log('what items: ', this.orderItems);
  }

  order(){
    this.orderItems = this.checkoutService.checkoutItems()
    this.orderItems = this.checkoutService.getOrderItems()
    this.router.navigate(['/checkout/done'])
  }

  playXmasMusic() {
    new Audio("assets/jingle-bells.mp3").play();
  }

}



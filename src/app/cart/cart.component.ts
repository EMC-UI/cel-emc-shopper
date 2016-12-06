import {Component, OnInit, Inject} from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any[]
  cartService
  constructor(@Inject(CartService) cartService:CartService) {
    this.cartService = cartService
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
  }

}
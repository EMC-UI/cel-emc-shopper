import {Component, OnInit, Inject} from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCollapsed
  cartItems:any[]
  cartService
  constructor(@Inject(CartService) cartService:CartService) {
    this.cartService = cartService
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
  }

  collapseCart(): void {
    this.cartCollapsed = !this.cartCollapsed;
  }

  removeAllItem(){
    let cartItems = this.cartService.getCartItems()
    while (cartItems.length >0) {
      cartItems.pop()
    }

  }

}

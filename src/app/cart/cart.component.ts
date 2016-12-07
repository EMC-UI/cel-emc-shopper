import {Component, OnInit, Inject, EventEmitter, Output} from '@angular/core';
import {CartService} from "../cart.service";

/**
 * @ngdoc directive
 * @name Cart
 *
 * @description
 * The `Cart` component is a local storage driven "bucket" of things.  With it's api, you can add/remove items
 * from the bucket.  Each item in the bucket will be persisted to the browser's local storage across session.  Once
 * the user is finished with their bucket, this component allows the developer to recieve a checkout event which
 * will supply the items that the user has checked out.
 *
 * # Example uses of the header component
 *
 * ```html
 * <cart></cart>
 * ```
 *
 * ```html
 * <cart [itemTemplate]="{{ item.name }}"
 *        [summaryTemplate]="{{ items.quantity }} {{ items.total }}"
 *        (checkout)="checkoutFunction(items)">
 * </cart>
 * ```
 *
 *
 * # Inputs
 *
 *
 * | Property        | Type            | Details                                                                     |
 * |-----------------|-----------------|-----------------------------------------------------------------------------|
 * | itemTemplate    | {@type string}  | Default template is provided with basic item.name displayed.                |
 * | summaryTemplate | {@type string}  | Default is no summary template.  items object provided for your template    |
 * | checkout        | {@type event}   | Called when user is ready to 'checkout'. first argument is array of items   |
 *
 *
 * @restrict Element
 *
 */
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCollapsed
  cartItems:any[]
  cartService
  @Output() checkout = new EventEmitter<boolean>()

  constructor(@Inject(CartService) cartService:CartService) {
    this.cartService = cartService
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
  }

  /**
   * @ngdoc method
   * @name checkout
   * @methodOf CartComponent
   * @description
   * This emits when the user clicks the checkout button and passes the cart items back to your function
   *
   */
  checkout() {
    this.checkout.emit(this.cartItems)
  }

  collapseCart(): void {
    this.cartCollapsed = !this.cartCollapsed;
  }

  /**
   * @ngdoc method
   * @name removeAllItems
   * @methodOf CartComponent
   * @description
   * Call this method when you are ready to empty the cart.  Typically after the user confirms their intentions.
   * Once this method is called, then the cart items will be removed permanently.
   *
   */
  removeAllItem(){
    let cartItems = this.cartService.getCartItems()
    while (cartItems.length >0) {
      cartItems.pop()
    }

  }

}

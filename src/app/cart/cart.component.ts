import {Component, OnInit, Inject, EventEmitter, Output, Input} from '@angular/core';
import {CartService} from "./cart.service";

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
 * # Outputs
 *
 * ```javascript
 * event: checkout - fires with one argument that is an array of items in the cart
 * ```
 *
 * @restrict Element
 *
 *
 *
 */
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartTitle:string = 'Wish List'
  @Input() itemTemplate:string = '{{item.name}}'
  @Input() summaryTemplate:string
  @Input() actionButtonLabel:string = 'Checkout'
  @Output() checkout = new EventEmitter<Object[]>()

  cartCollapsed
  cartItems
  cartService

  constructor(@Inject(CartService) cartService:CartService) {
    this.cartService = cartService
    this.cartService.cartItems.subscribe((cartItems) => {
      this.cartItems = cartItems.toJS()
    })
  }

  doCheckout() {
    this.checkout.emit(this.cartItems)
  }

  collapseCart(): void {
    this.cartCollapsed = !this.cartCollapsed;
  }

}

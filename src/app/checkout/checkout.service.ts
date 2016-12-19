import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

export class CheckoutService {
  localStorage
  key = 'order'
  orderItems
  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
  }

  getCartItems() {
    return this.localStorage.retrieve('cart').toJS() || [];
  }

  getOrderItems() {
    return this.localStorage.retrieve(this.key) || [];
  }

  checkoutItems() {

    let items = this.localStorage.retrieve('cart')
    let checkoutItems=[];
    while (items.length > 0){
      let item = items.pop();
      checkoutItems.push(item);
    }
    this.localStorage.store('order',checkoutItems)

    return this.localStorage.retrieve('order',items)

  }
}

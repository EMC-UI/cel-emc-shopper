import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

export class CheckoutService {
  localStorage
  key = 'cart'

  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
  }

  getCartItems() {
    return this.localStorage.retrieve(this.key) || [];
  }

  getOrderItems() {
    return this.localStorage.retrieve(this.key) || [];
  }

  checkoutItems() {
    return this.localStorage.retrieve(this.key) || [];
  }
}

import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import {StoreItem} from "./store.service";

@Injectable()
export class CartService {

  localStorage
  key = 'cart'

  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
  }

  addItem(item) {
    let items = this.localStorage.retrieve(this.key) || []
    let found = items.find(function(_item) {
      return _item.id === item.id
    })
    if (found) {
      found.quantity = found.quantity + 1
    } else {
      item.quantity = 1
      items.push(item)
    }
    this.localStorage.store(this.key, items);
  }

  hasItem(storeItem:StoreItem) {
    let found = this.getCartItems().find((cartItem) => {
      return cartItem.id === storeItem.id
    })
    return found;
  }

  getCartItems() {
    return this.localStorage.retrieve(this.key) || [];
  }

}

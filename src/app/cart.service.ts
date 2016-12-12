import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import {StoreItem} from "./store.service";
import * as _ from 'lodash'

@Injectable()
export class CartService {

  localStorage
  key = 'cart'

  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
    this.getCartItems = _.debounce(this._getCartItems, 100, { leading: true })
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

  removeItem(item) {
    let items = this.localStorage.retrieve(this.key) || []
    let index = items.findIndex((_item) => {
      return item.id === _item.id
    })
    if (index > -1) {
      items.splice(index, 1)
      this.localStorage.store(this.key, items);
    }
  }

  toggleAddItem(storeItem:StoreItem) {
    if(this.hasItem(storeItem)) {
      this.removeItem(storeItem)
    } else {
      this.addItem(storeItem)
    }
  }

  _getCartItems() {
    let items = this.localStorage.retrieve(this.key);
    console.log('hello getCartItems()', items);
    return items? items : [];
  }


  getCartItems() {

  }

}

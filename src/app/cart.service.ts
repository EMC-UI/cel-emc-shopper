import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import {StoreItem} from "./store.service";
import * as _ from 'lodash'
import {Observable, BehaviorSubject} from "rxjs";
import {Record, List} from 'immutable'

export interface iCartItem {
  id: string
  name: string
  desc: string
  price: number
  quantity: number
}

const CartItemRecord = Record({
  id: '',
  name: '',
  desc: '',
  price: 0.00,
  quantity: 0
}, 'CartItemRecord')

export class CartItem extends CartItemRecord implements iCartItem {
  id: string
  name: string
  desc: string
  price: number
  quantity: number
  constructor(props) {
    super(props)
  }
}

@Injectable()
export class CartService {

  localStorage
  key = 'cart'

  private cartItems: BehaviorSubject<List<CartItem>> = new BehaviorSubject(List([]))

  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
    let items = localStorage.retrieve(this.key) || []
    this.cartItems.next(items)
    this.cartItems.subscribe((items) => {
      this.localStorage.store(this.key, items);
    })
  }

  addItem(item) {
    let items = this.cartItems.getValue();
    let found = items.find(function(_item) {
      return _item.id === item.id
    })
    if (found) {
      found.quantity = found.quantity + 1
    } else {
      item.quantity = 1
      this.cartItems.next(items.push(item))
    }

  }

  hasItem(storeItem:StoreItem) {
    let items = this.cartItems.getValue();
    let found = items.find((cartItem) => {
      return cartItem.id === storeItem.id
    })
    return found ? true : false;
  }

  removeItem(item) {
    let items = this.cartItems.getValue();
    let index = items.findIndex((_item) => {
      return item.id === _item.id
    })
    if (index > -1) {
      items.splice(index, 1)
      this.cartItems.next(items)
    }
  }

  removeAll() {
    this.cartItems.next(<List<CartItem>>[])
  }

  toggleAddItem(storeItem:StoreItem) {
    if(this.hasItem(storeItem)) {
      this.removeItem(storeItem)
    } else {
      this.addItem(storeItem)
    }
  }

}

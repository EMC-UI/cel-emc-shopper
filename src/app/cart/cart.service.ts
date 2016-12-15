import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import {BehaviorSubject} from "rxjs";
import {List} from 'immutable'
import {iCartItem} from './cart.model'


@Injectable()
export class CartService {

  localStorage
  key = 'cart'

  cartItems: BehaviorSubject<List<iCartItem>> = new BehaviorSubject(List([]))

  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
    let storedItems = <iCartItem[]>localStorage.retrieve(this.key) || []
    this.cartItems.next(List(storedItems))
    this.cartItems.subscribe((items) => {
      this.localStorage.store(this.key, items);
    })
  }

  addItem(cartItem:iCartItem) {
    let items = this.cartItems.getValue();
    let index = items.findIndex(item => item.id === cartItem.id)
    if (index > -1) {
      items = items.updateIn([index, "quantity"], value => value + 1)
    } else {
      cartItem.quantity = 1
      items = items.push(cartItem)
    }
    this.cartItems.next(items)
  }

  hasItem(cartItem:iCartItem) {
    let items = this.cartItems.getValue();
    let found = items.find((item) => {
      return item.id === cartItem.id
    })
    return found ? true : false;
  }

  removeItem(item) {
    let items = this.cartItems.getValue();
    let index = items.findIndex((_item) => {
      return item.id === _item.id
    })
    if (index > -1) {
      items = items.remove(index)
      this.cartItems.next(items)
    }
  }

  removeAll() {
    this.cartItems.next(List(<iCartItem>[]))
  }

  toggleAddItem(cartItem:iCartItem) {
    if(this.hasItem(cartItem)) {
      this.removeItem(cartItem)
    } else {
      this.addItem(cartItem)
    }
  }

}

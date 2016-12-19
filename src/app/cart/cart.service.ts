import {Injectable, Inject} from '@angular/core'
import {LocalStorageService} from 'ng2-webstorage'
import {BehaviorSubject} from 'rxjs'
import {List} from 'immutable'
import {ICartItem} from './cart.model'


@Injectable()
export class CartService<T extends ICartItem<T>> {

  localStorage
  key = 'cart'

  cartItems: BehaviorSubject<List<T>> = new BehaviorSubject(List([]))

  constructor(@Inject(LocalStorageService) localStorage) {
    this.localStorage = localStorage
    let storedItems:List<T> = localStorage.retrieve(this.key) || []
    this.cartItems.next(List(storedItems))
    this.cartItems.subscribe((items) => {
      this.localStorage.store(this.key, items)
    })
  }

  addItem(cartItem: T) {
    let items:List<T> = this.cartItems.getValue()
    let index:number  = items.findIndex(item => item.id === cartItem.id)
    if (index > -1) {
      debugger;
      items = items.update(index, (item: T) => {
        let x:T = item.setQuantity(item.quantity + 1)
        return x
      })
    } else {
      items = items.push(cartItem)
    }
    this.cartItems.next(items)
  }

  hasItem(cartItem: T) {
    let items:List<T> = this.cartItems.getValue()
    let found = items.find((item) => {
      return item.id === cartItem.id
    })
    return found ? true : false
  }

  removeItem(item:T) {
    let items:List<T> = this.cartItems.getValue()
    let index:number = items.findIndex((_item) => {
      return item.id === _item.id
    })
    if (index > -1) {
      items = items.remove(index)
      this.cartItems.next(items)
    }
  }

  removeAll() {
    this.cartItems.next(List(<T[]>[]))
  }

  toggleItem(cartItem: T) {
    if (this.hasItem(cartItem)) {
      this.removeItem(cartItem)
    } else {
      this.addItem(cartItem)
    }
  }

}

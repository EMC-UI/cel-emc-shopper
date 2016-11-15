import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Injectable()
export class CartService {

  localStorage
  key = 'cart'

  constructor(@Inject(LocalStorageService) localStorage) {

    console.log('did i get a localStorage', localStorage)

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

  getCartItems() {
    return this.localStorage.retrieve(this.key) || [];
  }

}

import {Injectable, Inject} from '@angular/core';
import {CartService} from "./cart.service";

export class StoreItem {
  id:string
  name:string
  desc:string
  price:number
}

@Injectable()
export class StoreService {

  cartService:CartService
  storeItems //:StoreItem[]
  constructor(@Inject(CartService) cartService:CartService) {
    this.cartService = cartService
    this.storeItems = [ //<StoreItem[]>
      {id: '1', name:'Beers', desc: '', price: ''},
      {id: '2', name:'Chips', desc: '', price: ''},
      {id: '3', name:'Cake', desc: '', price: ''},
      {id: '4', name:'Pie', desc: '', price: ''},
      {id: '5', name:'Vodka', desc: '', price: ''},
      {id: '6', name:'Bailey\'s', desc: '', price: ''},
      {id: '7', name:'Corn Bread', desc: '', price: ''},
      {id: '8', name:'Milk', desc: '', price: ''}
    ]
  }

  addToCart(thing) {
    this.cartService.addItem(thing);
  }

}

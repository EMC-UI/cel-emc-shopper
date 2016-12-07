import {Injectable, Inject} from '@angular/core';
import {CartService} from "./cart.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';


export class StoreItem {
  id:string
  name:string
  desc:string
  price:number
}

@Injectable()
export class StoreService {

  cartService:CartService
  allItems
  storeItems //:StoreItem[]

  constructor(@Inject(CartService) cartService:CartService, @Inject(Http) private http: Http ) {
    this.cartService = cartService
    this.storeItems = this.allItems = [ //<StoreItem[]>
      {id: '1', name:'Ten FIDY', category:'Beer', desc: '', price: ''},
      {id: '2', name:'Sawtooth', category:'Beer', desc: '', price: ''},
      {id: '3', name:'Barrel Aged Yeti', category:'Beer', desc: '', price: ''},
      {id: '4', name:'Legend Of The Liquid Brain', category:'Beer', desc: '', price: ''},
      {id: '5', name:'Glazed', category:'Donuts', desc: '', price: ''},
      {id: '6', name:'Chocolate Glazed', category:'Donuts', desc: '', price: ''},
      {id: '7', name:'Strawberry Cake', category:'Donuts', desc: '', price: ''},
      {id: '8', name:'Bear Claw', category:'Donuts', desc: '', price: ''}
    ]
  }

  addToCart(thing) {
    this.cartService.addItem(thing);
  }

  filterByCategory(category:string) {
    if (!category) {
      this.storeItems = this.allItems
    } else {
      let things = this.allItems.filter((item) => {
        return item.category === category
      })
      this.storeItems = things;
    }

  }

}

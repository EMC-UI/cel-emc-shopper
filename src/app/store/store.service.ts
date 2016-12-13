import {Injectable, Inject} from '@angular/core';
import {CartService, iCartItem} from "../cart/cart.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';


export class StoreItem implements iCartItem {
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
      {id: '1', name:'Bazillion Lego Pieces', category:'Toys', desc: '', price: ''},
      {id: '2', name:'Moon Sand', category:'Toys', desc: '', price: ''},
      {id: '3', name:'VMAX Flash — The Amazing Technicolor Data Bucket', category:'Toys', desc: '', price: ''},
      {id: '4', name:'Web Component Playtime Blocks', category:'Toys', desc: '', price: ''},
      {id: '5', name:'Chess', category:'Games', desc: '', price: ''},
      {id: '6', name:'Silicon Valley Takeover', category:'Games', desc: '', price: ''},
      {id: '7', name:'Let Me Google That For You', category:'Games', desc: '', price: ''},
      {id: '8', name:'Sequence', category:'Games', desc: '', price: ''},
      {id: '9', name:'Jetson v5 Hover Scooter', category:'Electronics', desc: '', price: ''},
      {id: '10', name:'Sky Viper HD Drone', category:'Electronics', desc: '', price: ''},
      {id: '11', name:'TI-84 Graphing Calculator', category:'Electronics', desc: '', price: ''},
      {id: '12', name:'Mars Rover', category:'Electronics', desc: '', price: ''}
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

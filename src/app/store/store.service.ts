import {Injectable, Inject} from '@angular/core';
import {CartService} from "../cart/cart.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ICartItem} from "../cart/cart.model";
import {Record} from "immutable";


export class StoreItem extends Record({
  id: '',
  name: '',
  desc: '',
  category: '',
  price: 0.00,
  quantity: 1
}) implements ICartItem<StoreItem> {
  id: string
  name: string
  desc?: string
  category?: string
  price?: number
  quantity?: number

  setQuantity(number): StoreItem {
    return new StoreItem({
      id: this.id,
      name: this.name,
      desc: this.desc,
      category: this.category,
      price: this.price,
      quantity: this.quantity + 1
    })
  }
}

@Injectable()
export class StoreService {

  cartService: CartService<StoreItem>
  allItems
  storeItems //:StoreItem[]

  constructor(@Inject(CartService) cartService: CartService<StoreItem>, @Inject(Http) private http: Http) {
    this.cartService = cartService
    this.storeItems = this.allItems = [ //<StoreItem[]>
      new StoreItem({id: '1', name: 'Bazillion Lego Pieces', category: 'Toys', desc: '', price: ''}),
      new StoreItem({id: '2', name: 'Moon Sand', category: 'Toys', desc: '', price: ''}),
      new StoreItem({id: '3', name: 'VMAX Flash — The Amazing Technicolor Data Bucket', category: 'Toys', desc: '', price: ''}),
      new StoreItem({id: '4', name: 'Web Component Playtime Blocks', category: 'Toys', desc: '', price: ''}),
      new StoreItem({id: '5', name: 'Chess', category: 'Games', desc: '', price: ''}),
      new StoreItem({id: '6', name: 'Silicon Valley Takeover', category: 'Games', desc: '', price: ''}),
      new StoreItem({id: '7', name: 'Let Me Google That For You', category: 'Games', desc: '', price: ''}),
      new StoreItem({id: '8', name: 'Sequence', category: 'Games', desc: '', price: ''}),
      new StoreItem({id: '9', name: 'Jetson v5 Hover Scooter', category: 'Electronics', desc: '', price: ''}),
      new StoreItem({id: '10', name: 'Sky Viper HD Drone', category: 'Electronics', desc: '', price: ''}),
      new StoreItem({id: '11', name: 'TI-84 Graphing Calculator', category: 'Electronics', desc: '', price: ''}),
      new StoreItem({id: '12', name: 'Mars Rover', category: 'Electronics', desc: '', price: ''})
    ]
  }

  addToCart(thing) {
    this.cartService.addItem(thing);
  }

  filterByCategory(category: string) {
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

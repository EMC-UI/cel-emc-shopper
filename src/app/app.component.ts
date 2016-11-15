import {Component, Inject} from '@angular/core';
import {CartService} from "./cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!'
  allTheThings = []
  cartService

  constructor(@Inject(CartService) cartService) {
    this.cartService = cartService
    this.allTheThings = [
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

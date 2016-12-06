import {Component, OnInit, Inject} from '@angular/core';
import {StoreService} from "../store.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'store-donuts',
  templateUrl: './store-donuts.component.html'
})
export class StoreDonutsComponent implements OnInit {

  constructor(@Inject(CartService) public cartService:CartService,
              @Inject(StoreService) public storeService:StoreService) {

  }

  ngOnInit() {
  }

}

import {Component, OnInit, Inject} from '@angular/core';
import {StoreService} from "../store.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'store-beer',
  templateUrl: '../store/store.component.html'
})
export class StoreBeerComponent implements OnInit {

  constructor(@Inject(CartService) public cartService:CartService,
              @Inject(StoreService) public storeService:StoreService) {

  }

  ngOnInit() {}

}

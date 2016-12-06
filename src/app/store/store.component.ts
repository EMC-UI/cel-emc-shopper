import {Component, OnInit, Inject} from '@angular/core';
import {CartService} from "../cart.service";
import {StoreService} from "../store.service";

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  constructor(@Inject(CartService) public cartService:CartService,
              @Inject(StoreService) public storeService:StoreService) {

  }

  ngOnInit() {

  }

}

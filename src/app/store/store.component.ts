import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {Params, ActivatedRoute} from "@angular/router";
import {StoreService} from "../store.service";
import 'rxjs/add/operator/switchMap';
import {CartService} from "../cart.service";

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {

  category:string

  constructor(@Inject(ActivatedRoute) public route,
              @Inject(StoreService) public storeService:StoreService,
  @Inject(CartService) public cartService:CartService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.storeService.filterByCategory(params['category'])
      this.category=params['category']
    })
  }

  ngOnDestroy() {
    this.route.params.unsubscribe()
  }

}

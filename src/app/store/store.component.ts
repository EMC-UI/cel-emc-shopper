import {Component, OnInit, Inject} from '@angular/core';
import {CartService} from "../cart.service";
import {StoreService} from "../store.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  constructor(@Inject(CartService) public cartService:CartService,
              @Inject(StoreService) public storeService:StoreService,
              @Inject(ActivatedRoute) public route) {

  }

  ngOnInit() {

    //this.router.params.switchMap((params: Params) => this.storeService.getByType(params['category']))
    // this.route.params.switchMap((params: Params) => {
    //   console.log(params['category'])
    // })

  }


}

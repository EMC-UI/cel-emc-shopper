import {Component, OnInit, Inject} from '@angular/core';
import {Params, ActivatedRoute} from "@angular/router";
import {StoreService} from "../store.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-store-general',
  templateUrl: './store-general.component.html',
  styleUrls: ['./store-general.component.css']
})
export class StoreGeneralComponent implements OnInit {

  constructor(@Inject(ActivatedRoute) public route,
              @Inject(StoreService) public storeService:StoreService) { }

  ngOnInit() {
    console.log('ngOnInit', this.route.params);
    this.route.params.subscribe((params: Params) => {
      console.log(params['category'])
      this.storeService.filterByCategory(params['category'])
    })
  }

}

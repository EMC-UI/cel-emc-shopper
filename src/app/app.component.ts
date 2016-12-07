import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {'[class.xmas]':'xmas'}
})

export class AppComponent implements OnInit {
  title = 'Our Store'

  showCart: boolean = true
  xmas:boolean

  constructor(private router: Router) {

  }

  checkout(cartItems) {
    this.router.navigate(['checkout/start'])
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url.includes('checkout')) {
            this.showCart = false;
            this.xmas = true
          } else {
            this.showCart = true;
            this.xmas = false
          }
        }
      });
  }

  // ngOnInit() {
  //   this.route.params.subscribe((params:Params) => {
  //     console.log(params);
  //   })
  // }

}

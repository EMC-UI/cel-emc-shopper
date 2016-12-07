import {Component, OnInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'Our Store'
  showCart: boolean = true

  constructor(private router: Router) {

  }

  checkout(cartItems) {
    this.router.navigate(['checkout/start'])
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log(event.url);
          if (event.url.includes('checkout')) {
            this.showCart = false;
          } else {
            this.showCart = true;
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

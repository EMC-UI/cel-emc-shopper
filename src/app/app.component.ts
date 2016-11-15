import {Component, Inject} from '@angular/core';
import {CartService} from "./cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(@Inject(CartService) cart:CartService) {

  }
}
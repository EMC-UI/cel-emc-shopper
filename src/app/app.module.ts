import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage as StorageModule, LocalStorageService } from 'ng2-webstorage';
import { CartService } from './cart.service'

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import {StoreService} from "./store.service";
import { CheckoutComponent } from './checkout/checkout.component';
import {CheckoutService} from "./checkout.service";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    StoreComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StorageModule
  ],
  providers: [
    CartService,
    LocalStorageService,
    StoreService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

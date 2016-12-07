import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { Ng2Webstorage as StorageModule, LocalStorageService } from 'ng2-webstorage';
import { CartService } from './cart.service'

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { StoreService } from "./store.service";
import { StoreWrapperComponent } from './store-wrapper/store-wrapper.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {CheckoutService} from "./checkout.service";
import { DoneComponent } from './done/done.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: StoreWrapperComponent },
  { path: 'category/:category', component: StoreWrapperComponent },
  { path: 'checkout/start', component: CheckoutComponent },
  { path: 'checkout/done', component: DoneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    StoreComponent,
    StoreWrapperComponent,
    CheckoutComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StorageModule,
    RouterModule.forRoot(appRoutes)
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

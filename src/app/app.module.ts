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
import {StoreService} from "./store.service";
import { StoreDonutsComponent } from './store-donuts/store-donuts.component';
import { StoreBeerComponent } from './store-beer/store-beer.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'store-donuts', component: AppComponent },
  { path: 'store-beer', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    StoreComponent,
    StoreDonutsComponent,
    StoreBeerComponent
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
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

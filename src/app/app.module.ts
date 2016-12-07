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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: StoreWrapperComponent },
  { path: 'category/:category', component: StoreWrapperComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    StoreComponent,
    StoreWrapperComponent
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

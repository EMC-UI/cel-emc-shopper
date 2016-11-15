import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage, LocalStorageService } from 'ng2-webstorage';
import { CartService } from './cart.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage
  ],
  providers: [
    CartService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

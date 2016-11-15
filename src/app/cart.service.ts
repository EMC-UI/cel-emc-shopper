import {Injectable, Inject} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Injectable()
export class CartService {

  constructor(@Inject(LocalStorageService) localStorage) {

    console.log('did i get a localStorage', localStorage)
  }

}

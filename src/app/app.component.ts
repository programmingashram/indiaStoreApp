import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';
import { environment } from "../environments/environment";
import { OneSignal } from 'onesignal-ngx';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stores';
  showFiller = true;
  items: any;
  checkoutForm;
  length: any;
  constructor(private cartService: CartService, private oneSignal: OneSignal) {
    this.items = this.cartService.getItems();

    this.oneSignal.init({
      appId: "10a7c28a-9a03-401b-8760-4674f77c4c65",
    });
  }

  public getRowsValue(flag) {
    if (flag === null) {
      return this.items.length;
    } else {
      return this.items.filter(i => (i.state == flag)).length;
    }
  }
  message:any = null;
  ngOnInit(){}

}

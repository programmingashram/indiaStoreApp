import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  public getRowsValue(flag) {
    if (flag === null) {
      return this.items.length;
    } else {
      return this.items.filter(i => (i.state == flag)).length;
    }
  }
  message:any = null;
  ngOnInit(){
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }


}

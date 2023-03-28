import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';


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

  ngOnInit(){
    
  }

}

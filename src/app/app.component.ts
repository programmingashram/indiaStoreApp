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

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,) {

    this.items = this.cartService.getItems();

  }
  ngOnInit(){
   
  }
}

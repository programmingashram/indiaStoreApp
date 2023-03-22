import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FacebookService, InitParams } from 'ngx-facebook';
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
              private formBuilder: FormBuilder, private facebookService: FacebookService) {

    this.items = this.cartService.getItems();

  }
  private initFacebookService(): void {
    const initParams: InitParams = {
      xfbml: true,
      version: ''
    };
    this.facebookService.init(initParams);
  }
  ngOnInit(){
    this.initFacebookService();
  }

}

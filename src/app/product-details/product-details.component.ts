import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { PersonalCare, products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;
  personalcare;

  constructor(private route: ActivatedRoute,
              private cartService: CartService
  ) { }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  addToCart3(personalcare) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(personalcare);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
      this.personalcare = PersonalCare[+params.get('productId')];
    });
  }

}

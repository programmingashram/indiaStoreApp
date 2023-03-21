import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products, productsbakery } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;
  productsBakery;

  constructor(private route: ActivatedRoute,
              private cartService: CartService
  ) { }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  addToCart2(productsBakery) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(productsBakery);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
      this.productsBakery = productsbakery[+params.get('productId')];
    });
  }

}

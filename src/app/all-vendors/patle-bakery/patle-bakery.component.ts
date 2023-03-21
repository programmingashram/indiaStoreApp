import { Component, OnInit } from '@angular/core';
import { products, productsbakery } from 'src/app/products';


@Component({
  selector: 'app-patle-bakery',
  templateUrl: './patle-bakery.component.html',
  styleUrls: ['./patle-bakery.component.scss']
})
export class PatleBakeryComponent implements OnInit {
  products = productsbakery;


  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() { }

  ngOnInit(): void {
    console.log(products);
  }

}

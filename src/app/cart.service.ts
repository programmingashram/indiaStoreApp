import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CartService {

  constructor(private http: HttpClient) { }

  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  addToCart3(PersonalCare) {
    this.items.push(PersonalCare);
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}

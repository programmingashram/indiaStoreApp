import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-mahadev-kirana-genral',
  templateUrl: './mahadev-kirana-genral.component.html',
  styleUrls: ['./mahadev-kirana-genral.component.scss']
})
export class MahadevKiranaGenralComponent implements OnInit {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor() { }

  ngOnInit(): void {
  }

}

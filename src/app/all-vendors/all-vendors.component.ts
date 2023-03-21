import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.scss']
})
export class AllVendorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  allClients = [
    {
      shopName:"Mahadev Kirana",
      shpCategories: "🍿 Groceries",
      shopLogo:"https://img.freepik.com/free-vector/gradient-nerd-logo-template_23-2149201756.jpg?w=2000",
      location: "Rampayli Road",
      routerLink:"/mahadevKirana"
    },
    {
      shopName:"Patle Bakery",
      shpCategories: "🍉 Bakery",
      shopLogo: "https://img.freepik.com/free-vector/gradient-nerd-logo-template_23-2149201756.jpg?w=2000",
      location: "Goli baro Chowk",
      routerLink:"/patleBakery"
    }
  ]

}

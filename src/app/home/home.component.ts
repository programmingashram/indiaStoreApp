import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // qtyNumber :number = 0;
  constructor() { }

  ngOnInit(): void {

  }



  featuredProduct = [
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bev-health-deink_m_250223_01.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_beverages-tea-coffee_m_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'Out of Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'Low Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'Low Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 799,
      status: 'Low Stock'
    },

  ]


}

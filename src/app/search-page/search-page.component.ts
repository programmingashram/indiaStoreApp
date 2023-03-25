import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  searchText: string;

  ngOnInit(): void {
    this.featuredProduct = this.featuredProduct.sort((low, high) => low.price - high.price);
  }

  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  featuredProduct = [
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Dhaniya Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bev-health-deink_m_250223_01.jpg",
      name: 'Moong Dal',
      price: 7979,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_beverages-tea-coffee_m_250223_02.jpg",
      name: 'Moong Dal',
      price: 70099,
      status: 'Out of Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 7909,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 7899,
      status: 'Low Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 7919,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 7599,
      status: 'Low Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 7959,
      status: 'In Stock'
    },
    {
      shopName:"Mahadev Kirana Stores",
      prName:"Moong Dal (Saffola Honey Active, Made with Sundarban Forest Honey, )",
      prImage: "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg",
      name: 'Moong Dal',
      price: 599,
      status: 'Low Stock'
    },

  ]
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.featuredProduct = this.featuredProduct.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.featuredProduct = this.featuredProduct.sort((low, high) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.featuredProduct = this.featuredProduct.sort(function (low, high) {
            if (low.prName < high.prName) {
              return -1;
            }
            else if (low.prName > high.prName) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.featuredProduct = this.featuredProduct.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.featuredProduct;
  }
}

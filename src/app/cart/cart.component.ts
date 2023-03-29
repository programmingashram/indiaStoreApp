import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[];
  checkoutForm;
  myData : any;
  myData1 : any;
  myData2 : any;
  isShowDiv = true;
  @ViewChild('ProductName', {static: true}) paragraphRef: ElementRef;
  @ViewChild('ProductBrand', {static: true}) paragraphRef1: ElementRef;
  @ViewChild('ProductPrice', {static: true}) paragraphRef2: ElementRef;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,private elRef:ElementRef) {

    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }
   submisionForm(){
    this.isShowDiv = !this.isShowDiv;
   }
   ngAfterViewInit() {
    this.myData = this.paragraphRef.nativeElement.innerText;
    this.myData1 = this.paragraphRef1.nativeElement.innerText;
    this.myData2 = this.paragraphRef2.nativeElement.innerText;

    // console.log(this.paragraphRef.nativeElement.innerText);
  }
   onSubmit(customerData: any) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  public getRowsValue(flag) {
    if (flag === null) {
      return this.items.length;
    } else {
      return this.items.filter(i => (i.state == flag)).length;
    }
  }



  ngOnInit() {

  }

}

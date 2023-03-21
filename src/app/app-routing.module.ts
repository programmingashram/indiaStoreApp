import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVendorsComponent } from './all-vendors/all-vendors.component';
import { MahadevKiranaGenralComponent } from './all-vendors/mahadev-kirana-genral/mahadev-kirana-genral.component';
import { PatleBakeryComponent } from './all-vendors/patle-bakery/patle-bakery.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: "allVendors", component: AllVendorsComponent },
  {path: "mahadevKirana", component: MahadevKiranaGenralComponent },
  {path: "patleBakery", component: PatleBakeryComponent },
  { path: 'products/:productId', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

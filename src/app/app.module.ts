import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AllVendorsComponent } from './all-vendors/all-vendors.component';
import { HomeComponent } from './home/home.component';
import { MahadevKiranaGenralComponent } from './all-vendors/mahadev-kirana-genral/mahadev-kirana-genral.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { PatleBakeryComponent } from './all-vendors/patle-bakery/patle-bakery.component';


@NgModule({
  declarations: [
    AppComponent,
    AllVendorsComponent,
    HomeComponent,
    MahadevKiranaGenralComponent,
    CartComponent,
    ShippingComponent,
    ProductDetailsComponent,
    ProductListComponent,
    PatleBakeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

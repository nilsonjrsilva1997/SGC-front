import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PhoneComponent } from './phone/phone.component';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    PhoneComponent,
    AddressComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    NavComponent
  ]
})
export class HomeModule { }

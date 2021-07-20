import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from '../home/home.module';
import { NavComponent } from '../home/nav/nav.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    ToastrModule,
    HomeModule,
  ],
  providers: [
    NavComponent
  ]
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class RegisterUserModule { }

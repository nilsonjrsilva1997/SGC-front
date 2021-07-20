import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AddressComponent } from './home/address/address.component';
import { CustomerComponent } from './home/customer/customer.component';
import { PhoneComponent } from './home/phone/phone.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente/novo',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./register-user/register-user.module').then(m => m.RegisterUserModule)
  },
  {
    path: 'clientes', component: CustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'telefones', component: PhoneComponent
  },
  {
    path: 'enderecos', component: AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

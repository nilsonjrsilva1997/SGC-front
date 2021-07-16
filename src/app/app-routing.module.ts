import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'teste', component: TesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/nova-transferencia/nova-trasnferencia.module').then(m => m.NovaTransferenciaModule)
  },
  {
    path: 'extrato',
    loadChildren: () => import('./components/extrato/extrato.module').then(m => m.ExtratoModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

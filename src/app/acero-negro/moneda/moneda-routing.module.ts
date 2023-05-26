import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonedaPage } from './moneda.page';
import { MonedaDefaultComponent } from './components/moneda-default/moneda-default.component';
import { MonedaDetalleComponent } from './components/moneda-detalle/moneda-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: MonedaPage,
    children: [
      {
        path: '',
        component: MonedaDefaultComponent,
      },
      {
        path: 'detail/:id',
        component: MonedaDetalleComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonedaPageRoutingModule {}

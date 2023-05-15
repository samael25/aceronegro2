import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonedaPage } from './moneda.page';
import { MonedaDefaultComponent } from './components/moneda-default/moneda-default.component';

const routes: Routes = [
  {
    path: '',
    component: MonedaPage,
    children: [
      {
        path: '',
        component: MonedaDefaultComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonedaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadPage } from './habilidad.page';
import { HabilidadDefaultComponent } from './components/habilidad-default/habilidad-default.component';
import { HabilidadDetalleComponent } from './components/habilidad-detalle/habilidad-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HabilidadPage,
    children: [
      {
        path: '',
        component: HabilidadDefaultComponent,
      },
      {
        path: 'detail/:id',
        component: HabilidadDetalleComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadPageRoutingModule {}

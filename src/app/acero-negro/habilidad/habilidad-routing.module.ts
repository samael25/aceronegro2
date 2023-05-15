import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadPage } from './habilidad.page';
import { HabilidadDefaultComponent } from './components/habilidad-default/habilidad-default.component';

const routes: Routes = [
  {
    path: '',
    component: HabilidadPage,
    children: [
      {
        path: '',
        component: HabilidadDefaultComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadPageRoutingModule {}

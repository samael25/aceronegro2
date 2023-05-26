import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajePage } from './personaje.page';
import { PersonajeDefaultComponent } from './components/personaje-default/personaje-default.component';
import { PersonajeDetalleComponent } from './components/personaje-detalle/personaje-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajePage,
    children: [
      {
        path: '',
        component: PersonajeDefaultComponent,
      },
      {
        path: 'detail/:id',
        component: PersonajeDetalleComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajePageRoutingModule {}

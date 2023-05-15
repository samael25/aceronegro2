import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'personaje',
    pathMatch: 'full',
  },
  {
    path: 'personaje',
    loadChildren: () => import('./personaje/personaje.module').then( m => m.PersonajePageModule)
  },
  {
    path: 'habilidad',
    loadChildren: () => import('./habilidad/habilidad.module').then( m => m.HabilidadPageModule)
  },
  {
    path: 'moneda',
    loadChildren: () => import('./moneda/moneda.module').then( m => m.MonedaPageModule)
  },
  {
    path: 'reino',
    loadChildren: () => import('./reino/reino.module').then( m => m.ReinoPageModule)
  },
  {
    path: 'seniorio',
    loadChildren: () => import('./seniorio/seniorio.module').then( m => m.SeniorioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceroNegroPageRoutingModule {}

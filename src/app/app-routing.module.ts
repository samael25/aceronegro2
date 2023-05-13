import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'personaje',
    loadChildren: () => import('./personaje/personaje.module').then( m => m.PersonajePageModule)
  },
  {
    path: 'reino',
    loadChildren: () => import('./reino/reino.module').then( m => m.ReinoPageModule)
  },
  {
    path: 'seniorio',
    loadChildren: () => import('./seniorio/seniorio.module').then( m => m.SeniorioPageModule)
  },
  {
    path: 'moneda',
    loadChildren: () => import('./moneda/moneda.module').then( m => m.MonedaPageModule)
  },
  {
    path: 'habilidad',
    loadChildren: () => import('./habilidad/habilidad.module').then( m => m.HabilidadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

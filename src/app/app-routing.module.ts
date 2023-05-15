import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AceroNegroPage } from './acero-negro/acero-negro.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aceronegro',
    pathMatch: 'full'
  },
  {
    path: 'aceronegro',
    component: AceroNegroPage,
    loadChildren: () => import('./acero-negro/acero-negro.module').then( m => m.AceroNegroPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

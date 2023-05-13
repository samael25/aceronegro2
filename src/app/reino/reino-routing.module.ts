import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinoPage } from './reino.page';

const routes: Routes = [
  {
    path: '',
    component: ReinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinoPageRoutingModule {}

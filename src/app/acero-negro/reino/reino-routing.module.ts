import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinoPage } from './reino.page';
import { ReinoDefaultComponent } from './components/reino-default/reino-default.component';

const routes: Routes = [
  {
    path: '',
    component: ReinoPage,
    children: [
      {
        path: '',
        component: ReinoDefaultComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinoPageRoutingModule {}

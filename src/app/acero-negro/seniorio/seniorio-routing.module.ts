import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeniorioPage } from './seniorio.page';
import { SeniorioDefaultComponent } from './components/seniorio-default/seniorio-default.component';

const routes: Routes = [
  {
    path: '',
    component: SeniorioPage,
    children: [
      {
        path: '',
        component: SeniorioDefaultComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeniorioPageRoutingModule {}

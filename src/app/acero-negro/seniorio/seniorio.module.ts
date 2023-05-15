import { NgModule } from '@angular/core';

import { SeniorioPageRoutingModule } from './seniorio-routing.module';

import { SeniorioPage } from './seniorio.page';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SeniorioPageRoutingModule
  ],
  declarations: [SeniorioPage]
})
export class SeniorioPageModule {}

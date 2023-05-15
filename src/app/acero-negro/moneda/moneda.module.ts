import { NgModule } from '@angular/core';

import { MonedaPageRoutingModule } from './moneda-routing.module';

import { MonedaPage } from './moneda.page';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MonedaPageRoutingModule
  ],
  declarations: [MonedaPage]
})
export class MonedaPageModule {}

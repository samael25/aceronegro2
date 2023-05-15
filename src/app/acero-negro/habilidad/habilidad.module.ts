import { NgModule } from '@angular/core';


import { HabilidadPageRoutingModule } from './habilidad-routing.module';

import { HabilidadPage } from './habilidad.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { HabilidadDefaultComponent } from './components/habilidad-default/habilidad-default.component';

@NgModule({
  imports: [
    SharedModule,
    HabilidadPageRoutingModule
  ],
  declarations: [
    HabilidadPage,
    HabilidadDefaultComponent,
]
})
export class HabilidadPageModule {}

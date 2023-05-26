import { NgModule } from '@angular/core';


import { HabilidadPageRoutingModule } from './habilidad-routing.module';

import { HabilidadPage } from './habilidad.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { HabilidadDefaultComponent } from './components/habilidad-default/habilidad-default.component';
import { HabilidadDetalleComponent } from './components/habilidad-detalle/habilidad-detalle.component';
import { HabilidadFormDialogComponent } from './components/habilidad-form-dialog/habilidad-form-dialog.component';
import { HabilidadTableTemplateComponent } from './components/habilidad-table-template/habilidad-table-template.component';

@NgModule({
  imports: [
    SharedModule,
    HabilidadPageRoutingModule
  ],
  declarations: [
    HabilidadPage,
    HabilidadDefaultComponent,
    HabilidadDetalleComponent,
    HabilidadFormDialogComponent,
    HabilidadTableTemplateComponent
]
})
export class HabilidadPageModule {}

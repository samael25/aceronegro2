import { NgModule } from '@angular/core';

import { MonedaPageRoutingModule } from './moneda-routing.module';

import { MonedaPage } from './moneda.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MonedaDefaultComponent } from './components/moneda-default/moneda-default.component';
import { MonedaDetalleComponent } from './components/moneda-detalle/moneda-detalle.component';
import { MonedaTableTemplateComponent } from './components/moneda-table-template/moneda-table-template.component';
import { MonedaFormDialogComponent } from './components/moneda-form-dialog/moneda-form-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    MonedaPageRoutingModule
  ],
  declarations: [
    MonedaPage,
    MonedaDefaultComponent,
    MonedaDetalleComponent,
    MonedaTableTemplateComponent,
    MonedaFormDialogComponent
  ]
})
export class MonedaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajePageRoutingModule } from './personaje-routing.module';

import { PersonajePage } from './personaje.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PersonajeDefaultComponent } from './components/personaje-default/personaje-default.component';
import { PersonajeTableTemplateComponent } from './components/personaje-table-template/personaje-table-template.component';
import { PersonajeDeleteComponent } from './components/personaje-delete/personaje-delete.component';
import { PersonajeDetalleComponent } from './components/personaje-detalle/personaje-detalle.component';
import { PersonajeFormDialogComponent } from './components/personaje-form-dialog/personaje-form-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    PersonajePageRoutingModule
  ],
  declarations: [
    PersonajePage,
    PersonajeDefaultComponent,
    PersonajeTableTemplateComponent,
    PersonajeDeleteComponent,
    PersonajeDetalleComponent,
    PersonajeFormDialogComponent
]
})
export class PersonajePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajePageRoutingModule } from './personaje-routing.module';

import { PersonajePage } from './personaje.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PersonajeDefaultComponent } from './components/personaje-default/personaje-default.component';

@NgModule({
  imports: [
    SharedModule,
    PersonajePageRoutingModule
  ],
  declarations: [
    PersonajePage,
    PersonajeDefaultComponent,
]
})
export class PersonajePageModule {}

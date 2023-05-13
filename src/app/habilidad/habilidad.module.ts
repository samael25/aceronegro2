import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadPageRoutingModule } from './habilidad-routing.module';

import { HabilidadPage } from './habilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadPageRoutingModule
  ],
  declarations: [HabilidadPage]
})
export class HabilidadPageModule {}

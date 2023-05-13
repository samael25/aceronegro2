import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeniorioPageRoutingModule } from './seniorio-routing.module';

import { SeniorioPage } from './seniorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeniorioPageRoutingModule
  ],
  declarations: [SeniorioPage]
})
export class SeniorioPageModule {}

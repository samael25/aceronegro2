import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinoPageRoutingModule } from './reino-routing.module';

import { ReinoPage } from './reino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinoPageRoutingModule
  ],
  declarations: [ReinoPage]
})
export class ReinoPageModule {}

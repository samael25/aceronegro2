import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceroNegroPageRoutingModule } from './acero-negro-routing.module';

import { AceroNegroPage } from './acero-negro.page';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [SharedModule, AceroNegroPageRoutingModule],
  declarations: [AceroNegroPage]
})
export class AceroNegroPageModule {}

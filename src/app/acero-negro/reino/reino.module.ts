import { NgModule } from '@angular/core';

import { ReinoPageRoutingModule } from './reino-routing.module';

import { ReinoPage } from './reino.page';
import { ReinoDefaultComponent } from './components/reino-default/reino-default.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReinoPageRoutingModule
  ],
  declarations: [
    ReinoPage,
    ReinoDefaultComponent,
  ]
})
export class ReinoPageModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { MonedaFormDialogComponent } from '../moneda-form-dialog/moneda-form-dialog.component';

@Component({
  selector: 'app-moneda-detalle',
  templateUrl: './moneda-detalle.component.html',
  styleUrls: ['./moneda-detalle.component.scss'],
})
export class MonedaDetalleComponent implements OnInit {

  moneda: any;
  constructor(
    private modalCtrl: ModalController,
    private readonly catalogoService: CatalogosService,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.getMoneda(params['id']);
    });
  }
  getMoneda(id: number) {
    this.catalogoService.getMonedaDetail(id).subscribe((res) => {
      console.log('Moneda', res);
      this.moneda = res
    });
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = MonedaFormDialogComponent;
        this.modalPresente(event);
        break;
       
  }
}
  async modalPresente(event: any) {
    const modal = await this.modalCtrl.create({
      component: event.action,
      componentProps: {
      moneda: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.activateRoute.params.subscribe((params: Params) => {
        this.getMoneda(params['id']);
      });
    }
  }
}

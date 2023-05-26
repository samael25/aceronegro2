import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { HabilidadFormDialogComponent } from '../habilidad-form-dialog/habilidad-form-dialog.component';

@Component({
  selector: 'app-habilidad-detalle',
  templateUrl: './habilidad-detalle.component.html',
  styleUrls: ['./habilidad-detalle.component.scss'],
})
export class HabilidadDetalleComponent implements OnInit {

 
  habilidad: any;
  constructor(
    private modalCtrl: ModalController,
    private readonly catalogoService: CatalogosService,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.getHabilidad(params['id']);
    });
  }
  getHabilidad(id: number) {
    this.catalogoService.getHabilidadDetail(id).subscribe((res) => {
      console.log('Habilidad', res);
      this.habilidad = res
    });
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = HabilidadFormDialogComponent;
        this.modalPresente(event);
        break;
       
  }
}
  async modalPresente(event: any) {
    const modal = await this.modalCtrl.create({
      component: event.action,
      componentProps: {
      habilidad: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.activateRoute.params.subscribe((params: Params) => {
        this.getHabilidad(params['id']);
      });
    }
  }
}


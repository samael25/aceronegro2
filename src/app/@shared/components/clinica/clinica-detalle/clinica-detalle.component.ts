import { Component, OnInit } from '@angular/core';
import { ClinicaFormDialogComponent } from '../clinica-form-dialog/clinica-form-dialog.component';
import { ClinicaDeleteDialogComponent } from '../clinica-delete-dialog/clinica-delete-dialog.component';
import { ModalController } from '@ionic/angular';
import { ClinicaService } from '../../../../services/clinica.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clinica-detalle',
  templateUrl: './clinica-detalle.component.html',
  styleUrls: ['./clinica-detalle.component.scss'],
})
export class ClinicaDetalleComponent implements OnInit {
  Clinica: any;
  constructor(
    private modalCtrl: ModalController,
    private readonly clinicaService: ClinicaService,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.getClinica(params['id']);
    });
  }
  getClinica(id: number) {
    this.clinicaService.getClinicaDetail(id).subscribe((res) => {
      console.log('Clinica', res);
      this.Clinica = res;
    });
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = ClinicaFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'edit':
        event.action = ClinicaFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'delete':
        event.action = ClinicaDeleteDialogComponent;
        this.modalPresente(event);
        break;
    }
  }
  async modalPresente(event: any) {
    const modal = await this.modalCtrl.create({
      component: event.action,
      componentProps: {
      Clinica: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.activateRoute.params.subscribe((params: Params) => {
        this.getClinica(params['id']);
      });
    }
  }
}

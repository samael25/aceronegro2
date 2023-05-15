import { Component, Input, OnInit, Optional } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ClinicaService } from '../../../../services/clinica.service';

@Component({
  selector: 'app-clinica-delete-dialog',
  templateUrl: './clinica-delete-dialog.component.html',
  styleUrls: ['./clinica-delete-dialog.component.scss'],
})
export class ClinicaDeleteDialogComponent implements OnInit {

  @Optional() @Input() Clinica: any;
  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private readonly clinicaService: ClinicaService
  ) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async onDelete() {
    const alert = await this.alertController.create({
      header: `Seguro que desa borrar la clinica: ${this.Clinica.Nombre}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.cancel();
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.clinicaService
              .removeClinica(this.Clinica.IdClinica)
              .subscribe((res) => {
                return this.modalCtrl.dismiss(null, 'confirm');
              });
          },
        },
      ],
    });
    await alert.present();
  }
}

import { Component, Input, OnInit, Optional } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-usuario-delete-dialog',
  templateUrl: './usuario-delete-dialog.component.html',
  styleUrls: ['./usuario-delete-dialog.component.scss'],
})
export class UsuarioDeleteDialogComponent implements OnInit {
  @Optional() @Input() Usuario: any;
  constructor( 
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private readonly usuarioService: UsuarioService
  ) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async onDelete() {
    const alert = await this.alertController.create({
      header: `Seguro que desa borrar el Usuario: ${this.Usuario.Nombre}`,
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
            this.usuarioService
              .removeUser(this.Usuario.IdUsuario)
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

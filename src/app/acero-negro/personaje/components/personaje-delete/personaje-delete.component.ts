import { Component, Input, OnInit, Optional } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-personaje-delete',
  templateUrl: './personaje-delete.component.html',
  styleUrls: ['./personaje-delete.component.scss'],
})
export class PersonajeDeleteComponent implements OnInit {

  @Optional() @Input() personaje: any;
  constructor( 
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private readonly personajeService: PersonajeService
  ) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async onDelete() {
    const alert = await this.alertController.create({
      header: `Seguro que desa borrar el personaje: ${this.personaje.Nombre}`,
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
            this.personajeService
              .removePersonaje(this.personaje.IdPersonaje)
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

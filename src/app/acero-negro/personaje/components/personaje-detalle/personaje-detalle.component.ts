import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PersonajeService } from 'src/app/services/personaje.service';
import { PersonajeFormDialogComponent } from '../personaje-form-dialog/personaje-form-dialog.component';
import { PersonajeDeleteComponent } from '../personaje-delete/personaje-delete.component';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.scss'],
})
export class PersonajeDetalleComponent implements OnInit {

  personaje: any;
  constructor(
    private modalCtrl: ModalController,
    private readonly personajeService: PersonajeService,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.getPersonaje(params['id']);
    });
  }
  getPersonaje(id: number) {
    this.personajeService.getPersonajeDetail(id).subscribe((res) => {
      console.log('Personaje', res);
      this.personaje = res
    });
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = PersonajeFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'edit':
        event.action = PersonajeFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'delete':
        event.action = PersonajeDeleteComponent;
        this.modalPresente(event);
        break;
    }
  }
  async modalPresente(event: any) {
    const modal = await this.modalCtrl.create({
      component: event.action,
      componentProps: {
      personaje: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.activateRoute.params.subscribe((params: Params) => {
        this.getPersonaje(params['id']);
      });
    }
  }
}


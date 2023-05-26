import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PersonajeService } from 'src/app/services/personaje.service';
import { PersonajeFormDialogComponent } from '../personaje-form-dialog/personaje-form-dialog.component';
import { PersonajeDeleteComponent } from '../personaje-delete/personaje-delete.component';

@Component({
  selector: 'app-personaje-default',
  templateUrl: './personaje-default.component.html',
  styleUrls: ['./personaje-default.component.scss'],
})
export class PersonajeDefaultComponent implements OnInit {

  personaje: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly personajeService: PersonajeService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getPersonajes();
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
      case 'detail':
        this.router.navigate(['detail', event.data.IdPersonaje], {
          relativeTo: this.route,
        });
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
      this.getPersonajes();
    }
  }

  getPersonajes() {
    this.personajeService.getAllPersonajes().subscribe((response: any) => {
      this.personaje = response;
      console.log('Personaje', this.personaje);
    });
  }
}


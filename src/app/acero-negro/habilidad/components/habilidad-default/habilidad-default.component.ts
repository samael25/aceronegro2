import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { HabilidadFormDialogComponent } from '../habilidad-form-dialog/habilidad-form-dialog.component';

@Component({
  selector: 'app-habilidad-default',
  templateUrl: './habilidad-default.component.html',
  styleUrls: ['./habilidad-default.component.scss'],
})
export class HabilidadDefaultComponent implements OnInit {


  habilidad: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly catalogosService: CatalogosService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getHabilidades();
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = HabilidadFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'detail':
        this.router.navigate(['detail', event.data.IdHabilidad], {
          relativeTo: this.route,
        });
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
      this.getHabilidades();
    }
  }

  getHabilidades() {
    this.catalogosService.getAllHabilidades().subscribe((response: any) => {
      this.habilidad = response;
      console.log('Habilidad', this.habilidad);
    });
  }
}



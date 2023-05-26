import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { MonedaFormDialogComponent } from '../moneda-form-dialog/moneda-form-dialog.component';

@Component({
  selector: 'app-moneda-default',
  templateUrl: './moneda-default.component.html',
  styleUrls: ['./moneda-default.component.scss'],
})
export class MonedaDefaultComponent implements OnInit {

  moneda: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly catalogosService: CatalogosService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getMonedas();
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = MonedaFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'detail':
        this.router.navigate(['detail', event.data.IdMoneda], {
          relativeTo: this.route,
        });
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
      this.getMonedas();
    }
  }

  getMonedas() {
    this.catalogosService.getAllMonedas().subscribe((response: any) => {
      this.moneda = response;
      console.log('Moneda', this.moneda);
    });
  }
}


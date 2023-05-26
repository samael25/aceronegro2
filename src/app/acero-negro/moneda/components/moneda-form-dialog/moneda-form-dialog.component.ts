import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CatalogosService } from 'src/app/services/catalogos.service';

@Component({
  selector: 'app-moneda-form-dialog',
  templateUrl: './moneda-form-dialog.component.html',
  styleUrls: ['./moneda-form-dialog.component.scss'],
})
export class MonedaFormDialogComponent implements OnInit {

  moneda$: Observable<any[]>;
  userForm: FormGroup;
  @Optional() @Input() moneda: any;

  constructor(
    private readonly catalogosService: CatalogosService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
        Nombre: new FormControl(this.isEditable ? this.moneda.Nombre : null,[
        Validators.required, 
        Validators.minLength(2),
        Validators.maxLength(255),
        ]),
      Descripcion: new FormControl(this.isEditable ? this.moneda.Descripcion : null, [Validators.maxLength(1000)]),
    });
    } 

    get isEditable(): boolean {
      return this.moneda? true : false;
    }

  onSubmit() {
    if (this.userForm.valid) {
      const userForm = this.userForm.getRawValue();
      console.log('userForm', userForm);
       this.catalogosService.createMoneda(userForm).subscribe((res) => {
          return this.modalCtrl.dismiss(null, 'confirm');
        });
      }
    }
    


  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  get form() {
    return this.userForm.controls;
  }

  numeric(event) {
    let pattern = /^([0-9])$/;
    let val = pattern.test(event.key);
    return val;
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
      moneda: this.moneda,
        MetodoContacto: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
        this.moneda.IdMoneda
    }
  
}
}

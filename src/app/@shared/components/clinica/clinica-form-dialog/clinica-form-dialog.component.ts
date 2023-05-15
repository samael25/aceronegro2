import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CatalogosService } from '../../../../services/catalogos.service';
import { ClinicaService } from '../../../../services/clinica.service';
import { ModalController } from '@ionic/angular';
import { MetodoContactoFormDialogComponent } from '../../metodo-contacto/metodo-contacto-form-dialog/metodo-contacto-form-dialog.component';
import { MetodoContactoDeleteDialogComponent } from '../../metodo-contacto/metodo-contacto-delete-dialog/metodo-contacto-delete-dialog.component';

@Component({
  selector: 'app-clinica-form-dialog',
  templateUrl: './clinica-form-dialog.component.html',
  styleUrls: ['./clinica-form-dialog.component.scss'],
})
export class ClinicaFormDialogComponent implements OnInit {
  giros$: Observable<any[]>;
  clinicaForm: FormGroup;
  metodosContacto$: Observable<any[]>;
  @Optional() @Input() Clinica: any;

  constructor(
    private readonly catalogosService: CatalogosService,
    private readonly clinicaService: ClinicaService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.giros$ = this.catalogosService.getAllGiros();
    this.clinicaForm = new FormGroup({
      Nombre: new FormControl(this.isEditable ? this.Clinica.Nombre : null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]),
      Descripcion: new FormControl(
        this.isEditable ? this.Clinica.Descripcion : null,
        [Validators.maxLength(1000)]
      ),
      IdGiro: new FormControl(
        this.isEditable ? this.Clinica.giro.IdGiro : null,
        [Validators.required, Validators.min(1)]
      ),
    });
    if (this.isEditable) {
      this.metodosContacto$ = this.clinicaService.getMetodosContacto(
        this.Clinica.IdClinica
      );
      this.clinicaForm.addControl(
        'IdClinica',
        new FormControl(this.Clinica.IdUsuario)
      );
    } else {
      this.clinicaForm.addControl(
        'Telefono',
        new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ])
      );
      this.clinicaForm.addControl(
        'Correo',
        new FormControl(null, [
          Validators.required,
          Validators.email,
          Validators.maxLength(100),
        ])
      );
    }
  }

  onSubmit() {
    console.log('onSubmith');
    const clinicaForm = this.clinicaForm.getRawValue();
    console.log('clinicaForm', clinicaForm);
    if (this.clinicaForm.valid) {
      if (this.isEditable) {
        this.clinicaService.updateClinica(clinicaForm).subscribe((res) => {
          return this.modalCtrl.dismiss(null, 'confirm');
        });
      } else {
        this.clinicaService.createClinica(clinicaForm).subscribe((res) => {
          return this.modalCtrl.dismiss(null, 'confirm');
        });
      }
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  get form() {
    return this.clinicaForm.controls;
  }

  get isEditable(): boolean {
    return this.Clinica ? true : false;
  }

  numeric(event) {
    let pattern = /^([0-9])$/;
    let val = pattern.test(event.key);
    return val;
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = MetodoContactoFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'edit':
        event.action = MetodoContactoFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'delete':
        event.action = MetodoContactoDeleteDialogComponent;
        this.modalPresente(event);
        break;
    }
  }

  async modalPresente(event: any) {
    const modal = await this.modalCtrl.create({
      component: event.action,
      componentProps: {
        Clinica: this.Clinica,
        MetodoContacto: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.metodosContacto$ = this.clinicaService.getMetodosContacto(
        this.Clinica.IdClinica
      );
    }
  }
}

import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CatalogosService } from '../../../../services/catalogos.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-metodo-contacto-form-dialog',
  templateUrl: './metodo-contacto-form-dialog.component.html',
  styleUrls: ['./metodo-contacto-form-dialog.component.scss'],
})
export class MetodoContactoFormDialogComponent implements OnInit {
  tiposMetodoContacto$: Observable<any[]>;
  metodoContactoForm: FormGroup;
  @Optional() @Input() MetodoContacto: any;
  @Optional() @Input() Usuario: any;
  @Optional() @Input() Clinica: any;

  constructor(
    private readonly catalogosService: CatalogosService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.tiposMetodoContacto$ =
      this.catalogosService.getAllTipoMetodoContacto();
    this.metodoContactoForm = new FormGroup({
      IdTipoMetodoContacto: new FormControl(1, [
        Validators.required,
        Validators.min(1),
      ]),
      Nombre: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]),
      Descripcion: new FormControl(null, [Validators.maxLength(1000)]),
      Principal: new FormControl(null),
      IdUsuario: new FormControl(this.Usuario?.IdUsuario ?? null),
      IdClinica: new FormControl(this.Clinica?.IdClinica ?? null),
    });
    if (this.isEditable) {
      this.metodoContactoForm.addControl(
        'IdMetodoContacto',
        new FormControl(null)
      );
      this.form.IdTipoMetodoContacto.disabled;
      this.metodoContactoForm.reset(this.MetodoContacto);
    }
  }

  onSubmit() {
    if (this.metodoContactoForm.valid) {
      const metodoContactoForm = this.metodoContactoForm.getRawValue();
      if (this.isEditable) {
        console.log('updateMetodoContacto', metodoContactoForm);
        this.catalogosService
          .updateMetodoContacto(metodoContactoForm)
          .subscribe((res) => {
            return this.modalCtrl.dismiss(null, 'confirm');
          });
      } else {
        console.log('createMetodoContacto', metodoContactoForm);
        this.catalogosService
          .createMetodoContacto(metodoContactoForm)
          .subscribe((res) => {
            return this.modalCtrl.dismiss(null, 'confirm');
          });
      }
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  get form() {
    return this.metodoContactoForm.controls;
  }

  get isEditable(): boolean {
    return this.MetodoContacto ? true : false;
  }

  numeric(event) {
    let pattern = /^([0-9])$/;
    let val = pattern.test(event.key);
    return val;
  }
}

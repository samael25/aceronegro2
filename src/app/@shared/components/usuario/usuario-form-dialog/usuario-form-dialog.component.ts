import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CatalogosService } from '../../../../services/catalogos.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { MetodoContactoFormDialogComponent } from '../../metodo-contacto/metodo-contacto-form-dialog/metodo-contacto-form-dialog.component';
import { MetodoContactoDeleteDialogComponent } from '../../metodo-contacto/metodo-contacto-delete-dialog/metodo-contacto-delete-dialog.component';

@Component({
  selector: 'app-usuario-form-dialog',
  templateUrl: './usuario-form-dialog.component.html',
  styleUrls: ['./usuario-form-dialog.component.scss'],
})
export class UsuarioFormDialogComponent implements OnInit {
  tiposUsuario$: Observable<any[]>;
  userForm: FormGroup;
  metodosContacto$: Observable<any[]>;
  roles$: Observable<any[]>;
  clinicas$: Observable<any[]>;
  @Optional() @Input() Usuario: any;

  constructor(
    private readonly catalogosService: CatalogosService,
    private readonly usuarioService: UsuarioService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.tiposUsuario$ = this.catalogosService.getAllUserType();
    this.roles$ = this.catalogosService.getAllRoles();
    this.clinicas$ = this.catalogosService.getAllClinica();
    this.userForm = new FormGroup({
      Nombre: new FormControl(this.isEditable ? this.Usuario.Nombre : null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]),
      Descripcion: new FormControl(
        this.isEditable ? this.Usuario.Descripcion : null,
        [Validators.maxLength(1000)]
      ),
      IdTipoUsuario: new FormControl(
        this.isEditable ? this.Usuario.tipoUsuario.IdTipoUsuario : null,
        [Validators.required, Validators.min(1)]
      ),
      IdRol: new FormControl(
        this.isEditable ? this.Usuario.tipoUsuario.IdRol : null,
        [Validators.required, Validators.min(1)]
      ),
      IdClinica: new FormControl(
        this.isEditable ? this.Usuario.tipoUsuario.IdClinica : null,
        [Validators.required, Validators.min(1)]
      ),
    });
    if (this.isEditable) {
      this.metodosContacto$ = this.usuarioService.getMetodosContacto(
        this.Usuario.IdUsuario
      );
      this.userForm.addControl(
        'IdUsuario',
        new FormControl(this.Usuario.IdUsuario)
      );
    } else {
      this.userForm.addControl(
        'Telefono',
        new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ])
      );
      this.userForm.addControl(
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
    if (this.userForm.valid) {
      const userForm = this.userForm.getRawValue();
      console.log('userForm', userForm);
      if (this.isEditable) {
        this.usuarioService.updateUser(userForm).subscribe((res) => {
          return this.modalCtrl.dismiss(null, 'confirm');
        });
      } else {
        this.usuarioService.createUserComplete(userForm).subscribe((res) => {
          return this.modalCtrl.dismiss(null, 'confirm');
        });
      }
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  get form() {
    return this.userForm.controls;
  }

  get isEditable(): boolean {
    return this.Usuario ? true : false;
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
        Usuario: this.Usuario,
        MetodoContacto: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.metodosContacto$ = this.usuarioService.getMetodosContacto(
        this.Usuario.IdUsuario
      );
    }
  }
}

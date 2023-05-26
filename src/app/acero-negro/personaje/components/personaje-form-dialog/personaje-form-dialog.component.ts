import { Component, Input, OnInit, Optional } from '@angular/core';
import { PersonajeDeleteComponent } from '../personaje-delete/personaje-delete.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { PersonajeService } from 'src/app/services/personaje.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-personaje-form-dialog',
  templateUrl: './personaje-form-dialog.component.html',
  styleUrls: ['./personaje-form-dialog.component.scss'],
})
export class PersonajeFormDialogComponent implements OnInit {

  habilidad$: Observable<any[]>;
  seniorio$: Observable<any[]>;
  reino$: Observable<any[]>;
  personajes$: Observable<any[]>;
  userForm: FormGroup;
  @Optional() @Input() personaje: any;

  constructor(
    private readonly catalogosService: CatalogosService,
    private readonly personajeService: PersonajeService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.reino$ = this.catalogosService.getAllReino();
    this.habilidad$ = this.catalogosService.getAllHabilidad();
    this.seniorio$ = this.catalogosService.getAllSeniorio();
    this.userForm = new FormGroup({
      Nombre: new FormControl(this.isEditable ? this.personaje.Nombre : null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]),
      Descripcion: new FormControl(
        this.isEditable ? this.personaje.Descripcion : null,
        [Validators.maxLength(1000)]
      ),
      IdHabilidad: new FormControl(
        this.isEditable ? this.personaje.habilidadPersonajes[0]?.IdHabilidad : null,
        [Validators.required, Validators.min(1)]
      ),
      IdReino: new FormControl(
        this.isEditable ? this.personaje.reinoPersonajes[0]?.IdReino : null,
        [Validators.required, Validators.min(1)]
      ),
      IdSeniorio: new FormControl(
        this.isEditable ? this.personaje.seniorioPersonajes[0]?.IdSeniorio : null,
        [Validators.required, Validators.min(1)]
      ),
    });
    if (this.isEditable) {
      this.userForm.addControl(
        'IdPersonaje', new FormControl(this.personaje.IdPersonaje,
        [Validators.required, Validators.min(1)]
       ))
       this.userForm.addControl(
        'IdHabilidadPersonaje', new FormControl(this.personaje.habilidadPersonajes[0]?.IdHabilidadPersonaje,
          [Validators.required, Validators.min(1)]
       ))
       this.userForm.addControl(
        'IdReinoPersonaje', new FormControl(this.personaje.reinoPersonajes[0]?.IdReinoPersonaje,
          [Validators.required, Validators.min(1)]
       ))
       this.userForm.addControl(
        'IdSeniorioPersonaje', new FormControl(this.personaje.seniorioPersonajes[0]?.IdSeniorioPersonaje,
          [Validators.required, Validators.min(1)]
       )) 
    } 
    }

  onSubmit() {
    if (this.userForm.valid) {
      const userForm = this.userForm.getRawValue();
      console.log('userForm', userForm);
      if (this.isEditable) {
        this.personajeService.updatePersonaje(userForm).subscribe((res) => {
          return this.modalCtrl.dismiss(null, 'confirm');
        });
      } else {
        this.personajeService.createPersonaje(userForm).subscribe((res) => {
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
    return this.personaje ? true : false;
  }

  numeric(event) {
    let pattern = /^([0-9])$/;
    let val = pattern.test(event.key);
    return val;
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
        personaje: this.personaje,
        MetodoContacto: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
        this.personaje.IdPersonaje
    }
  }
}

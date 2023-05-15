import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuarioDeleteDialogComponent } from '../usuario-delete-dialog/usuario-delete-dialog.component';
import { UsuarioService } from '../../../../services/usuario.service';
import { UsuarioFormDialogComponent } from '../usuario-form-dialog/usuario-form-dialog.component';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.scss'],
})
export class UsuarioDetalleComponent implements OnInit {
  Usuario: any;
  constructor(
    private modalCtrl: ModalController,
    private readonly usuarioService: UsuarioService,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.getUsuario(params['id']);
    });
  }
  getUsuario(id: number) {
    this.usuarioService.getUserDetail(id).subscribe((res) => {
      console.log('Usaurio', res);
      this.Usuario = res
    });
  }

  async openModal(event: any) {
    switch (event.action) {
      case 'add':
        event.action = UsuarioFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'edit':
        event.action = UsuarioFormDialogComponent;
        this.modalPresente(event);
        break;
      case 'delete':
        event.action = UsuarioDeleteDialogComponent;
        this.modalPresente(event);
        break;
    }
  }
  async modalPresente(event: any) {
    const modal = await this.modalCtrl.create({
      component: event.action,
      componentProps: {
        Usuario: event.data,
      },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.activateRoute.params.subscribe((params: Params) => {
        this.getUsuario(params['id']);
      });
    }
  }
}

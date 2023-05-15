import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acero-negro',
  templateUrl: './acero-negro.page.html',
  styleUrls: ['./acero-negro.page.scss'],
})
export class AceroNegroPage implements OnInit {

  public usuarioMenu = [
    { title: 'Personaje', url: '/aceronegro/personaje', icon: 'home' },
    { title: 'Reino', url: '/aceronegro/reino', icon: 'document' },
    { title: 'Señorio', url: '/aceronegro/seniorio', icon: 'folder' },
    { title: 'Habilidad', url: '/aceronegro/habilidad', icon: 'heart' },
    { title: 'Moneda', url: '/aceronegro/moneda', icon: 'heart' },
  ];
  public labels = [];
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onLogOut() {
    sessionStorage.removeItem('usuario');
    // this.router.navigate(['/auth']);
  }
}

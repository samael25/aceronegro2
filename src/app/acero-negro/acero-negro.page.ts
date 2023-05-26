import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acero-negro',
  templateUrl: './acero-negro.page.html',
  styleUrls: ['./acero-negro.page.scss'],
})
export class AceroNegroPage implements OnInit {

  public usuarioMenu = [
    { title: 'Personaje', url: '/aceronegro/personaje', icon: 'person-circle' },
    { title: 'Reino', url: '/aceronegro/reino', icon: 'earth' },
    { title: 'Señorio', url: '/aceronegro/seniorio', icon: 'shield-half' },
    { title: 'Habilidad', url: '/aceronegro/habilidad', icon: 'skull' },
    { title: 'Moneda', url: '/aceronegro/moneda', icon: 'diamond' },
  ];
  public labels = [];
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onLogOut() {
    sessionStorage.removeItem('usuario');
    // this.router.navigate(['/auth']);
  }
}

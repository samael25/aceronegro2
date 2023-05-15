import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  constructor(
    private readonly navControl: NavController,
  ) {}

  ngOnInit() {}
  
  irAtras() {
    this.navControl.pop()
  }
}


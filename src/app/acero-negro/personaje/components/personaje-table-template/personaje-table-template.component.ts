import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personaje-table-template',
  templateUrl: './personaje-table-template.component.html',
  styleUrls: ['./personaje-table-template.component.scss'],
})
export class PersonajeTableTemplateComponent implements OnInit {

  _data: any[];
  @Output('onClickAction') onClickAction: EventEmitter<any>;
  @Input('data') set data(personaje: any[]) {
    this._data = personaje;
  }
  constructor() {
    this.onClickAction = new EventEmitter<any>();
  }

  ngOnInit() {}

  onClick(action: string, data?: any) {
    this.onClickAction.emit({
      action: action,
      data: data,
    });
  }
}


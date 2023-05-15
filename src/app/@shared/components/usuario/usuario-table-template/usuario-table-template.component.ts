import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'generic-usuario-table-template',
  templateUrl: './usuario-table-template.component.html',
  styleUrls: ['./usuario-table-template.component.scss'],
})
export class UsuarioTableTemplateComponent implements OnInit {
  _data: any[];
  @Output('onClickAction') onClickAction: EventEmitter<any>;
  @Input('data') set data(usuarios: any[]) {
    this._data = usuarios;
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

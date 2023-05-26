import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-habilidad-table-template',
  templateUrl: './habilidad-table-template.component.html',
  styleUrls: ['./habilidad-table-template.component.scss'],
})
export class HabilidadTableTemplateComponent implements OnInit {

 
  _data: any[];
  @Output('onClickAction') onClickAction: EventEmitter<any>;
  @Input('data') set data(habilidad: any[]) {
    this._data = habilidad;
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




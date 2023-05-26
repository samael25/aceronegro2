import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-moneda-table-template',
  templateUrl: './moneda-table-template.component.html',
  styleUrls: ['./moneda-table-template.component.scss'],
})
export class MonedaTableTemplateComponent implements OnInit {

  _data: any[];
  @Output('onClickAction') onClickAction: EventEmitter<any>;
  @Input('data') set data(moneda: any[]) {
    this._data = moneda;
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




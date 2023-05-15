import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'generic-clinica-table-template',
  templateUrl: './clinica-table-template.component.html',
  styleUrls: ['./clinica-table-template.component.scss'],
})
export class ClinicaTableTemplateComponent implements OnInit {

  _data: any[];
  @Output('onClickAction') onClickAction: EventEmitter<any>;
  @Input('data') set data(clinicas: any[]) {
    this._data = clinicas;
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


import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'ion-error-message',
  template: `
    <ion-note *ngIf="shouldShowErrors()">
      <ion-icon>cancel</ion-icon>
      {{ listOfErrors() }}
    </ion-note>
  `,
})
export class ErrorMessageComponent {
  @Input()
  public control: AbstractControl;
  @Input()
  public nomCampo: string;

  private static readonly errorMessages = {
    required: (params, nomCampo) => `El campo ${nomCampo} es requerido`,
    minlength: (params, nomCampo) =>
      `${nomCampo} debe tener minimo ${params.requiredLength} caracteres.`,
    maxlength: (params, nomCampo) =>
      `${nomCampo} debe tener máximo ${params.requiredLength} caracteres.`,
    max: (params, nomCampo) =>
      `${nomCampo}  debe ser un valor máximo de ${params.max}.`,
    min: (params, nomCampo) =>
      `${nomCampo} debe ser un valor minimo de ${params.min}.`,
    pattern: (params, nomCampo) => `${nomCampo} no valido`,
    email: (params, nomCampo) => `${nomCampo} no valido`,
  };

  shouldShowErrors(): boolean {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((field) =>
      this.getMessage(field, this.control.errors[field], this.nomCampo)
    );
  }

  private getMessage(type: string, params: any, nomCampo: string) {
    return ErrorMessageComponent.errorMessages[type](params, nomCampo);
  }
}

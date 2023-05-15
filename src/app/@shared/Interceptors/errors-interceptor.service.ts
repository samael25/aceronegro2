import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import * as HttpStatusCodes from 'http-status-codes';
import { Observable, throwError } from 'rxjs';
// import Swal from 'sweetalert2';

import { catchError } from 'rxjs/operators';

import { TipoError } from '../enums/tipo-error';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorHttpInterceptorService implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private alertController: AlertController
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // const loaderService = this.injector.get(LoaderService);

        if (this.noExisteConexion()) {
          this.presentAlert('Error', 'Sin Conexión!', 'Sin Conexión!');
        }

        switch (error.status) {
          case HttpStatusCodes.StatusCodes.BAD_REQUEST:
            if (error.error.tipoError) {
              if (error.error.tipoError === TipoError.Validacion) {
                error.error.Validaciones.forEach(async (mess) => {
                  this.presentAlert('Error', mess.mensaje, mess.mensaje);
                  // await Swal.fire({
                  //   position: 'top-end',
                  //   icon: 'info',
                  //   title: mess.mensaje,
                  //   showConfirmButton: false,
                  //   timer: 4000,
                  // });
                });
                return throwError(error.error.Validaciones);
              } else if (error.error.tipoError === TipoError.Negocio) {
                this.presentAlert(
                  'Error',
                  error.error.mensaje,
                  error.error.mensaje
                );
                // Swal.fire({
                //   icon: 'warning',
                //   title: 'Error',
                //   text: error.error.mensaje,
                //   // footer: 'Negocio'
                // });
                return throwError(error.error.mensaje);
              }
            } else {
              this.presentAlert(
                'Error',
                error.error.mensaje,
                error.error.mensaje
              );
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Bad Request',
              //   text: error.error.message,
              //   // footer: 'BAD_REQUEST'
              // });
              return throwError(error.error.message);
            }
            break;

          case HttpStatusCodes.StatusCodes.FORBIDDEN:
          case HttpStatusCodes.StatusCodes.UNAUTHORIZED:
            this.presentAlert(
              'Error',
              'UNAUTHORIZED',
              'No cuenta con permisos para acceder a esta función.'
            );
            // Swal.fire({
            //   icon: 'question',
            //   title: 'UNAUTHORIZED',
            //   text: 'No cuenta con permisos para acceder a esta función.',
            //   // footer: 'UNAUTHORIZED'
            // });
            break;

          case HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR:
            this.presentAlert('Error', 'Error Server', error.message);
            // Swal.fire({
            //   icon: 'error',
            //   title: 'Error Server',
            //   text: error.message,
            //   // footer: 'Error Server'
            // });
            break;

          case 0 | HttpStatusCodes.StatusCodes.NOT_FOUND:
            this.presentAlert('Error', 'Error Server', error.message);
            // Swal.fire({
            //   icon: 'question',
            //   title: 'Error Server',
            //   text: 'No hay conexion',
            //   // footer: 'Error Server'
            // });
            break;
          default:
            this.presentAlert('Error', 'Error Server', 'No hay conexion');
            // Swal.fire({
            //   icon: 'question',
            //   title: 'Error Server',
            //   text: 'No hay conexion',
            //   // footer: 'Error Server'
            // });
            break;
        }

        return throwError(error);
      })
    );
  }

  private noExisteConexion(): boolean {
    return !navigator.onLine;
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // private negociosErrorMessage(error: ErrorApi): string[] {
  //   const errors: string[] = [error.mensaje];
  //   return errors;
  // }
}

// interface ErrorApi {
//   mensaje: string;
//   tipoError: TipoError;
// }

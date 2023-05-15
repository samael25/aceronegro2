import { Injectable } from '@angular/core';
import { HttpApiService, HttpRequestMethod } from '../@shared/http';

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  constructor(private readonly httpApiService: HttpApiService) {}

  // TipoUsuario

  getAllUserType() {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `tipoUsuario/findAll`
    );
  }

  // Giro

  getAllGiros() {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `giro/findAll`
    );
  }

  // Roles

  getAllRoles() {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `rol/findAll`
    );
  }

  // Clinicas

  getAllClinica() {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `clinica/findAll`
    );
  }

  // TipoMetodoContacto

  getAllTipoMetodoContacto() {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `tipoMetodoContacto/findAll`
    );
  }

  // MetodoContacto

  createMetodoContacto(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `metodoContacto/create`,
      params
    );
  }

  updateMetodoContacto(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PUT,
      `metodoContacto/update`,
      params
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpApiService, HttpRequestMethod } from '../@shared/http';

@Injectable({
  providedIn: 'root',
})
export class ClinicaService {
  constructor(private readonly httpApiService: HttpApiService) {}

  createClinica(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `clinica/create`,
      params
    );
  }

  updateClinica(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PUT,
      `clinica/update`,
      params
    );
  }

  updateConsultorio(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PUT,
      `consultorio/update`,
      params
    );
  }

  getAllClinicas() {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `clinica/findAll`
    );
  }

  getClinicaDetail(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `clinica/findOneClinicaDetail/${id}`
    );
  }

  
  getConsultorioDetail(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `consultorio/findOneConsultorioDetail/${id}`
    );
  }

  removeClinica(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.DELETE,
      `clinica/remove/${id}`
    );
  }

  removeConsultorio(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.DELETE,
      `consultorio/remove/${id}`
    );
  }

  reactiveClinica(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PATCH,
      `clinica/reactive/${id}`
    );
  }

  getMetodosContacto(idClinica: number) {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `clinica/findAllMetodosContacto/${idClinica}`
    );
  }

  createConsultorio(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `consultorio/create`,
      params
    );
  }
}

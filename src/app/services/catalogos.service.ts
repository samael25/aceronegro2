import { Injectable } from '@angular/core';
import { HttpApiService, HttpRequestMethod } from '../@shared/http';

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  constructor(private readonly httpApiService: HttpApiService) {}

  // TipoUsuario

  getAllHabilidad() {
    return this.httpApiService.httpApi<any[]>(
      HttpRequestMethod.GET,
      `habilidad/findAll`
    );
  }

  
  getAllSeniorio() {
    return this.httpApiService.httpApi<any[]>(
      HttpRequestMethod.GET,
      `seniorio/findAll`
    );
  }

  getAllReino() {
    return this.httpApiService.httpApi<any[]>(
      HttpRequestMethod.GET,
      `reino/findAll`
    );
  }

  getAllMonedas() {
    return this.httpApiService.httpApi<any[]>(
      HttpRequestMethod.GET,
      `moneda/findAll`
    );
  }

  getAllHabilidades() {
    return this.httpApiService.httpApi<any[]>(
      HttpRequestMethod.GET,
      `habilidad/findAll`
    );
  }

  createMoneda(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `moneda/create`,
      params
    );
  }

  createHabilidad(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `habilidad/create`,
      params
    );
  }

  getAllPersonaje() {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `personaje/findAll`
    );
  }

  getMonedaDetail(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `moneda/findOne/${id}`
    );
  }

  getHabilidadDetail(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `habilidad/findOne/${id}`
    );
  }
  }

import { Injectable } from '@angular/core';
import { HttpApiService, HttpRequestMethod } from '../@shared/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private readonly httpApiService: HttpApiService) {}

  createPersonaje(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `personaje/create`,
      params
    );
  }

  updatePersonaje(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PUT,
      `personaje/update`,
      params
    );
  }

  getAllPersonajes() {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `personaje/findAll`
    );
  }

  getPersonajeDetail(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `personaje/findOnePersonajeDetail/${id}`
    );
  }
  
  removePersonaje(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.DELETE,
      `personaje/remove/${id}`
    );
  }

  reactiveClinica(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PATCH,
      `clinica/reactive/${id}`
    );
  }

 
}

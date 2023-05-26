import { Injectable } from '@angular/core';
import { HttpApiService, HttpRequestMethod } from '../@shared/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private readonly httpApiService: HttpApiService) {}

  createUserComplete(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `usuario/createComplete`,
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

  getAllHabilidad() {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `habilidad/findAll`
    );
  }

  
  getAllSeniorio() {
    return this.httpApiService.httpApi(
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

  getAllUsersByIdClinica(idClinica: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `usuario/findAllByIdClinica/${idClinica}`
    );
  }

  getUserDetail(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.GET,
      `usuario/findOneDetail/${id}`
    );
  }

  removeUser(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.DELETE,
      `usuario/remove/${id}`
    );
  }

  reactiveUser(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.PATCH,
      `usuario/reactive/${id}`
    );
  }

  getMetodosContacto(idUsuario: number) {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.GET,
      `usuario/findAllMetodosContacto/${idUsuario}`
    );
  }
}

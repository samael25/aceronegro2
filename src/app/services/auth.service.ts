import { Injectable } from '@angular/core';
import { HttpApiService, HttpRequestMethod } from '../@shared/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpApiService: HttpApiService) { }

  login(params: any) {
    return this.httpApiService.httpApi<any>(
      HttpRequestMethod.POST,
      `auth/login`,
      params
    );
  }

  registerUser(params: any) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `auth/register`,
      params
    );
  }

  sms(id: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `auth/sms/${id}`
    );
  }

  recovery(phone: number) {
    return this.httpApiService.httpApi(
      HttpRequestMethod.POST,
      `auth/reset/${phone}`
    );
  }
}

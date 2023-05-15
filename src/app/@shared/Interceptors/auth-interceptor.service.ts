import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(sessionStorage.getItem('token'));

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    req = req.clone({ headers: req.headers.set('Ocp-Apim-Subscription-Key', 'eb819a75db34470b8fa0bf15a23c05ac') });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}

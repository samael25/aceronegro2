import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { SpinnerService } from "../http/spinner.service";

@Injectable()
export class SpinnerInterceptorService implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.llamarSpinner();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.detenerSpinner())
        );
    }
}

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpApiService } from './http';
import { AuthInterceptorService } from './Interceptors/auth-interceptor.service';
import { ErrorHttpInterceptorService } from './Interceptors/errors-interceptor.service';
import { SpinnerInterceptorService } from './Interceptors/spinner-interceptor.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    // MaterialModule,
    HttpClientModule,
    NgxSpinnerModule
    // RouterModule
  ],
  exports: [
    ErrorMessageComponent,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    HttpApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule {}

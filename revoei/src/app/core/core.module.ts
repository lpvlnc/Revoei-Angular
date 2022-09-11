import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { GlobalHttpInterceptorService } from "./services/global-http-interceptor.service";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
      extendedTimeOut: 5000,
      progressBar: true,
      disableTimeOut: false,
      enableHtml: false,
      maxOpened: 3,
      preventDuplicates: true,
      includeTitleDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true }],
})
export class CoreModule { }

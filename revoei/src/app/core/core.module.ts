import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { GlobalHttpInterceptorService } from "./services/global-http-interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
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

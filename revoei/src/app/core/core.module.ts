import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { GlobalHttpInterceptorService } from "./services/global-http-interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NavBarComponent } from "@shared/nav-bar/nav-bar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
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
    }),
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true }],
})
export class CoreModule { }

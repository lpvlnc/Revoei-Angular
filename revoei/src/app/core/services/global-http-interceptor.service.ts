import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Token } from '@core/interfaces/login';
import { RequestService } from './request.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  updatingSession: boolean = false;
  constructor(private toastr: ToastrService,
              private router: Router,
              private request: RequestService,
              private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var token = localStorage.getItem("jwt") ?? "";
    if (token != "") {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem("jwt")}`)
      });

      var dateNow = new Date();
      var refreshString = localStorage.getItem("jwt_refresh") ?? "0";
      var refreshDate = new Date(parseInt(refreshString));

      var expiresString = localStorage.getItem("jwt_expire") ?? "0";
      var expiresDate = new Date(parseInt(expiresString));

      if (dateNow >= refreshDate && dateNow <= expiresDate && !this.updatingSession) {
        this.updatingSession = true;
        this.updateUserSession(token).subscribe({
          next: (response: Token) => {
            if (!!response && !!response.token) {
              this.updateLocalStorageSession(response);
            }
          },
          error: (e) => {
            console.error(e);
          }
        }).add(() => {
          this.spinner.hide();
        })
      }
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            switch (error.status) {
                case 401: // Unauthorized
                  this.toastr.error('Your session has expired.', 'Error');
                  this.router.navigate(["/login"]);
                  break;
                case 403: // Forbidden
                  this.showOnconsole(error.error);
                  break;
                case 412: // Preconditioned error
                  this.toastr.error(error.error, 'Error');
                  break;
                case 500: // Internal server error
                  this.showOnconsole(error.error);
                  break;
            }
          } 
        } else {
            console.error("Generic error");
        }
        console.log(error);
        return throwError(() => new Error(error.messsage));
      })
    )
  }

  showOnconsole(error: any): void {
    let errorMessage = `Error (${error.statusCode}): ${error.errorMessage} - `;
    errorMessage += error.detailedErrorMessage ? `Details: ${error.detailedErrorMessage}` : 'Details: no details.';
    console.error(errorMessage);
  }

  updateUserSession(token: string): Observable<Token> {
    return this.request.Request('get', `Authentication/UpdateUserSession/${token}`);
  }


  updateLocalStorageSession(token: Token){
    localStorage.setItem("jwt", token.token);
    localStorage.setItem("minutes_till_expires", token.minutesTillExpires.toString());
              
    var refreshDate = new Date();
    refreshDate.setTime(refreshDate.getTime() + ((token.minutesTillExpires / 2) * 60 * 1000));
    localStorage.setItem("jwt_refresh", ""+refreshDate.getTime());
    console.log(refreshDate);

    var expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (token.minutesTillExpires * 60 * 1000));
    console.log(expireDate);
    localStorage.setItem("jwt_expire", ""+expireDate.getTime());
    this.updatingSession = false;
  }
}
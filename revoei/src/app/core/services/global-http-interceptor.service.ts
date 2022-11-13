import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService,
              private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem("jwt")}`)
    });
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
        return throwError(() => new Error(error.messsage));
      })
    )
  }

  showOnconsole(error: any): void {
    let errorMessage = `Error (${error.statusCode}): ${error.errorMessage} - `;
    errorMessage += error.detailedErrorMessage ? `Details: ${error.detailedErrorMessage}` : 'Details: no details.';
    console.error(errorMessage);
  }
}
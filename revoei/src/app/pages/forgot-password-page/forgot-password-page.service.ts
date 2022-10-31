import { Injectable } from '@angular/core';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordPageService {

  constructor(private request: RequestService) { }

  sendPasswordRecoveryEmail(email: string): Observable<void> {
    return this.request.Request('post', `Authentication/SendPasswordRecoveryEmail/${email}`, { responseType: 'text' });
  }
}

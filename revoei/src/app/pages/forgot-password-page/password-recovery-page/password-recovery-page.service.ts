import { Injectable } from '@angular/core';
import { ResetPasswordModel } from '@core/interfaces/login';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryPageService {

  constructor(private request: RequestService) { }

  passwordRecoveryTokenValid(token: string): Observable<boolean> {
    return this.request.Request('get', `Authentication/PasswordRecoveryTokenValid/${token}`, { responseType: 'text' });
  }

  resetPassword(model: ResetPasswordModel): Observable<string> {
    return this.request.Request('post', 'Authentication/ResetPassword/', model, { responseType: 'text' });
  }
}

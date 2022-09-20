import { Injectable } from '@angular/core';
import { Login, Token } from '@core/interfaces/login';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginPageService {

  constructor(private request: RequestService) { }

  login(login: Login): Observable<Token> {
    return this.request.Request('post', 'Authentication/Login', login);
  }
}

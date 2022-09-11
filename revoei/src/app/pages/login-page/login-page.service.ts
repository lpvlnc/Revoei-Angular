import { Injectable } from '@angular/core';
import { Login } from '@core/interfaces/login';
import { RequestService } from '@core/services/request.service';

@Injectable()
export class LoginPageService {

  constructor(private request: RequestService) { }

  login(login: Login) {
    return this.request.Request('post', 'Authentication/Login', login);
  }
}

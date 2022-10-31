import { Injectable } from "@angular/core";
import { TokenBase } from "@core/interfaces/login";
import { RequestService } from "@core/services/request.service";
import { Observable } from "rxjs";

@Injectable()
export class RegistrationPageEmailConfirmationService {

  constructor(private request: RequestService) { }

  confirmEmail(token: TokenBase): Observable<string> {
    return this.request.Request('post', 'Authentication/ConfirmEmail', token, { responseType: 'text' });
  }
}
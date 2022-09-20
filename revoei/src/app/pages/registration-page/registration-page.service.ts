import { Injectable } from "@angular/core";
import { Registration } from "@core/interfaces/registration";
import { RequestService } from "@core/services/request.service";
import { Observable } from "rxjs";

@Injectable()
export class RegistrationPageService {

  constructor(private request: RequestService) { }

  registration(registration: Registration): Observable<string> {
    return this.request.Request('post', 'Authentication/Registration', registration, { responseType: 'text' });
  }
}
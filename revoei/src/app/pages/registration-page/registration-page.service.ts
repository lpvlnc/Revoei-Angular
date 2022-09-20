import { Injectable } from "@angular/core";
import { User } from "@core/interfaces/user";
import { RequestService } from "@core/services/request.service";
import { Observable } from "rxjs";

@Injectable()
export class RegistrationPageService {

  constructor(private request: RequestService) { }

  registration(user: User): Observable<string> {
    return this.request.Request('post', 'Authentication/Registration', user, {responseType: 'text'});
  }
}
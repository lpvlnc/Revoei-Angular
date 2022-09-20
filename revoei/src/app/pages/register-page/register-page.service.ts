import { Injectable } from "@angular/core";
import { User } from "@core/interfaces/user";
import { RequestService } from "@core/services/request.service";
import { Observable } from "rxjs";

@Injectable()
export class RegisterPageService {

  constructor(private request: RequestService) { }

  register(user: User): Observable<string> {
    return this.request.Request('post', 'Authentication/Register', user, {responseType: 'text'});
  }
}
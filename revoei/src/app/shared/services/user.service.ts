import { Injectable } from '@angular/core';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private request: RequestService) { }

  getByID(id: number): Observable<User> {
    return this.request.Request('get', `User/GetByID/${id}`);
  }

  update(id: number, user: User): Observable<string> {
    return this.request.Request('post', `User/Update/${id}`, user, { responseType: 'text' });
  }
}

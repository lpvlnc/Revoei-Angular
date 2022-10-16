import { Injectable } from '@angular/core';
import { Party } from '@core/interfaces/party';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private request: RequestService) { }

  get(): Observable<Party[]> {
    return this.request.Request('get', 'Party/Get');
  }

  getByID(id: number): Observable<Party> {
    return this.request.Request('get', `Party/GetByID/${id}`);
  }
}

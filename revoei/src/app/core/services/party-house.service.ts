import { Injectable } from '@angular/core';
import { PartyHouse } from '@core/interfaces/party-house';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyHouseService {

  constructor(private request: RequestService) { }

  get(): Observable<PartyHouse[]> {
    return this.request.Request('get', 'PartyHouse/Get');
  }

  getByID(id: number): Observable<PartyHouse> {
    return this.request.Request('get', `PartyHouse/GetByID/${id}`);
  }
}

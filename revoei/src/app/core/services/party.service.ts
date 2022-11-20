import { Injectable } from '@angular/core';
import { Party } from '@shared/interfaces/party';
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

  getByPartyHouseId(id: number): Observable<Party[]> {
    return this.request.Request('get', `Party/GetByPartyHouseId/${id}`);
  }

  userPresenceConfirmed(userId: number, partyId: number): Observable<boolean> {
    return this.request.Request('get', `Party/UserPresenceConfirmed/${userId}/${partyId}`);
  }

  confirmPresence(userId: number, partyId: number): Observable<string> {
    return this.request.Request('post', `Party/ConfirmPresence/${userId}/${partyId}`, null, { responseType: 'text' });
  }

  cancelPresence(userId: number, partyId: number): Observable<string> {
    return this.request.Request('delete', `Party/CancelPresence/${userId}/${partyId}`, null, { responseType: 'text' });
  }
}

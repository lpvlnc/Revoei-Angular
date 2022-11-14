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

  userPresenceConfirmed(userId: number, partyId: number): Observable<boolean> {
    return this.request.Request('get', `UserParty/UserPresenceConfirmed/${userId}/${partyId}`);
  }

  confirmPresence(userId: number, partyId: number): Observable<string> {
    return this.request.Request('post', `UserParty/ConfirmPresence/${userId}/${partyId}`, null, { responseType: 'text' });
  }

  cancelPresence(userId: number, partyId: number): Observable<string> {
    return this.request.Request('delete', `UserParty/CancelPresence/${userId}/${partyId}`, null, { responseType: 'text' });
  }
}

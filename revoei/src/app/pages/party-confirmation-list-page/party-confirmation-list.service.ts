import { Injectable } from '@angular/core';
import { RequestService } from '@core/services/request.service';
import { UserPartyConfirmationDTO } from '@shared/interfaces/user-party-confirmation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyConfirmationListService {

  constructor(private request: RequestService) { }

  getPartyConfirmationList(partyId: number): Observable<UserPartyConfirmationDTO[]> {
    return this.request.Request('get', `Party/GetPartyConfirmationList/${partyId}`);
  }
}

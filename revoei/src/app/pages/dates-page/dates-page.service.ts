import { Injectable } from '@angular/core';
import { RequestService } from '@core/services/request.service';
import { DateDTO } from '@shared/interfaces/party';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesPageService {

  constructor(private request: RequestService) { }

  getDates(userId: number): Observable<DateDTO[]> {
    return this.request.Request('get', `Party/GetByUserId/${userId}`);
  }
}

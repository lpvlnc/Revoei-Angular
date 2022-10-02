import { Injectable } from '@angular/core';
import { RevoeiDate } from '@shared/interfaces/revoei-date';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevoeiDateService {

  constructor(private request: RequestService) { }

  get(): Observable<RevoeiDate[]> {
    return this.request.Request('get', 'Date/Get');
  }
}

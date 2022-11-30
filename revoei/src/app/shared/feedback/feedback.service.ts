import { Injectable } from '@angular/core';
import { RequestService } from '@core/services/request.service';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private request: RequestService) { }

  sendFeedback(feedback: Feedback): Observable<string> {
    return this.request.Request('post', 'User/SendFeedback/', feedback, { responseType: 'text' });
  }
}

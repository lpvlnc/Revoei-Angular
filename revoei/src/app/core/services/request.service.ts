import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export type RequestMethod = 'get' | 'post' | 'put' | 'delete';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements OnDestroy {

  //baseUrl = 'https://leonardovalenca-api.azurewebsites.net/';
  baseUrl = 'https://localhost:44334/api/';

  private subscriptions: Subscription = new Subscription(() => { });

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  Request(method: RequestMethod, url: string, body?: any) {
    let request: Observable<any>;
    url = this.baseUrl + url;

    switch(method) {
      case 'get':
        request = this.http.get(url);
        break;
      case 'post':
        request = this.http.post(url, body);
        break;
      case 'put':
        request = this.http.put(url, body);
        break;
      case 'delete':
        request = this.http.delete(url);
        break;
      default:
        throw new Error(`${method} is not a valid request type.`);
    }
    return request;
  }
}
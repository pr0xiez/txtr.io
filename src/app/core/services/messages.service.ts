import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queries } from './queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from './auth.service';
import { IHttpResponse } from './interfaces';

@Injectable()
export class MessagesService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  messages
  messages$: Subject<any[]> = new Subject
  
  messagesChanged() {
    this.messages$.next(this.messages)
  }
  
  connect() {
    return Observable.of(this.messages)
  }

  getSentMessages() {
    const body = {
      query: Queries.queries.sentMessages
    }

    return this.httpClient.post<IHttpResponse>(this.authService.endpointURL, body)
      .map(res => {
        console.log('getSentMessages', res)
        this.messages = res.data.sentMsgs
        return res
      })
      
  }
}
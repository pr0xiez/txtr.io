import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queries } from '../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../core/services/auth.service';
import { IHttpResponse } from '../core/services/interfaces';

@Injectable()
export class MessagesService {
  constructor(private httpClient: HttpClient, private authService: AuthService) 
  { 
    console.log('ngOnInit ran')
    this.getSentMessages().subscribe(data => this.messages$.next(data))
  }

  messages
  messages$: Subject<any[]> = new Subject
  
  messagesChanged() {
    this.messages$.next(this.messages)
  }
  
  connect() {
    return this.messages$.asObservable()
  }
  disconnect() {
    // TODO ??
  }

  getSentMessages() {
    const body = {
      query: Queries.queries.sentMessages
    }

    return this.httpClient.post<IHttpResponse>(this.authService.endpointURL, body)
      .map(res => {
        console.log('getSentMessages', res.data.sentMsgs)
        return res.data.sentMsgs
      })
  }
}
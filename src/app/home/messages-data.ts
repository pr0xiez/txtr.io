import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Queries } from '../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../core/services/auth.service';
import { IHttpResponse } from '../core/services/interfaces';

export class MessagesDataSource implements OnInit {
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    console.log('constructor MessagesDataSource')
    this.getSentMessages().subscribe()
  }
  messages
  messages$: Subject<any[]> = new Subject

  ngOnInit() {
    console.log('ngOnInit MessagesDataSource')
  }
  
  messagesChanged(msgs) {
    this.messages$.next(msgs)
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
        console.log('getSentMessages', res)
        this.messagesChanged(res.data.sentMsgs)
        return res
      })
      
  }
}
import { OnInit } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'
import { Queries } from '../../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../../core/services/auth.service'
import { IHttpResponse, ISentMessages, IQueuedMessages } from '../../core/services/interfaces'
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description handles data stream needed by queued component
 */

export class QueuedDataSource implements OnInit {
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    console.log('constructor MessagesDataSource')
    this.getQueuedMessages().subscribe()
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

  getQueuedMessages() {
    const body = {
      query: Queries.queries.queuedMessages
    }

    return this.httpClient.post<IHttpResponse<IQueuedMessages>>(this.authService.endpointURL, body)
      .map(res => {
        console.log('getQueuedMessages', res)
        this.messagesChanged(res.data.queuedMsgs)
        return res
      })
      
  }
}
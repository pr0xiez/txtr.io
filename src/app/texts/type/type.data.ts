import { IMessageType } from '../interfaces';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'
import { Queries } from '../../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../../core/services/auth.service'
import { IHttpResponse, IMessageTypes, IQueuedMessages, ISentMessages } from '../../core/services/interfaces';
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description handles data stream needed by queued component
 */

export class TypesDataSource {
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.getQueuedMessages().subscribe()
  }
  messages$: Subject<any[]> = new Subject
  
  messagesChanged(msgs: any) {
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
      query: Queries.queries.messageTypes
    }

    return this.httpClient.post<IHttpResponse<IMessageTypes>>(this.authService.endpointURL, body)
      .map(res => {
        console.log('getMessageTypes', res)
        this.messagesChanged(res.data.msgTypes)
        return res
      })
      
  }
}
import { ISentMessagesR } from '../interfaces';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'
import { Queries } from '../../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../../core/services/auth.service'
import { IHttpResponse, ISentMessages } from '../../core/services/interfaces'

export class SentMessagesDataSource {
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.getSentMessages().subscribe()
  }
  messages$: Subject<any[]> = new Subject
  
  messagesChanged(msgs) {
    this.messages$.next(msgs)
  }
  
  connect() {
    return this.messages$.asObservable()
  }

  disconnect() {
    // TODO ??
  }

  getSentMessages () {
    const body = {
      query: Queries.queries.sentMessages
    }

    return this.httpClient.post<IHttpResponse<ISentMessages>>(this.authService.endpointURL, body)
      .map(res => {
        const messages = res.data.sentMsgs
        console.log('getSentMessages', messages)
        this.messagesChanged(messages)
        return messages
      })
  }

  trackById(index: number, item: ISentMessagesR): number { // return unique identifier of item
    return item.id
  }
}
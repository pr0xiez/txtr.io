import { MdPaginator } from '@angular/material';
import { ISentMessagesR } from '../interfaces';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'
import { Queries } from '../../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../../core/services/auth.service'
import { IHttpResponse, ISentMessages } from '../../core/services/interfaces'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class SentMessagesDataSource {
  constructor(private httpClient: HttpClient, private authService: AuthService, private _paginator: MdPaginator) {
    this.getSentMessages().subscribe()
  }
  messages$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  get data(): any[] { return this.messages$.value }
  
  messagesChanged(msgs) {
    this.messages$.next(msgs)
  }
  
  connect() {
    console.log(`messages$: ${this.data}`)
    console.log('connect() running')
    
    const displayDataChanges = [
      this.messages$,
      this._paginator.page
    ]

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.data.slice()

      // grab only the records the table needs to display currently
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize
      return data.splice(startIndex, this._paginator.pageSize)
    })
  }

  disconnect() {
    // TODO ??
  }

  getSentMessages() {
    const body = {
      query: Queries.queries.sentMessages
    }

    return this.httpClient.post<IHttpResponse<ISentMessages>>(this.authService.endpointURL, body)
      .map(res => {
        console.log('getSentMessages', res)
        this.messagesChanged(res.data.sentMsgs)

        return res
      })
      
  }
}
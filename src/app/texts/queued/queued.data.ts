import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http'
import { Queries } from '../../core/services/queries'
import { Subject } from 'rxjs/Subject'
import { AuthService } from '../../core/services/auth.service'
import { IHttpResponse, ISentMessages, IQueuedMessages } from '../../core/services/interfaces'
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description handles data stream needed by queued component
 */

export class QueuedDataSource {
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.getQueuedMessages().subscribe()
    console.log(this.data)
  }
  _filterChange = new BehaviorSubject('')
  messages$: BehaviorSubject<IQueuedMessages[]> = new BehaviorSubject([])

  get data(): IQueuedMessages[] { return this.messages$.value }
  get filter(): string { return this._filterChange.value }
  set filter(filter: string) { this._filterChange.next(filter) }
  
  messagesChanged(msgs) {
    this.messages$.next(msgs)
  }
  
  connect() {
    // return Observable.of(this.data)

    const displayDataChanges = [
      this.messages$,
      this._filterChange
    ]

    return Observable.merge(...displayDataChanges).map(() => {
      return this.data.slice().filter((x: any) => {
        return x.toNumber.includes(this.filter) || x.id == this.filter
      })
    })
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
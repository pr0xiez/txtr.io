import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { IMessageTypesR } from './../interfaces'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { Queries } from '../../core/services/queries'
import { AuthService } from '../../core/services/auth.service'
import { IHttpResponse, IMessageTypes } from '../../core/services/interfaces'
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description handles data for text message types comonent
 */

export class TypesDataSource {
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    if (sessionStorage.getItem('textTypes') == undefined) {
      this.getQueuedMessages().subscribe()
    } else {
      this.messages$.next(JSON.parse(sessionStorage.getItem('textTypes')).data.msgTypes)
    }
  }
  messages$: BehaviorSubject<IMessageTypesR[]> = new BehaviorSubject<IMessageTypesR[]>([])
  
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
        sessionStorage.setItem('textTypes', JSON.stringify(res))
        this.messages$.next(res.data.msgTypes)
        return res
      })
  }

  trackById(index: number, item: IMessageTypesR): number { // return unique identifier of item
    return item.id
  }
}
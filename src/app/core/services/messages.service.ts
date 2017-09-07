import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject'

@Injectable()
export class MessagesService {
  constructor(private httpClient: HttpClient) { }
  messages = []
  messages$: Subject<any[]> = new Subject
  
  messagesChanged() {
    this.messages$.next(this.messages)
  }
}
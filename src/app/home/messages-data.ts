import { OnInit } from '@angular/core';
import { MessagesService } from '../core/services/messages.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


export class MessagesDataSource implements OnInit {
  constructor(private messagesService: MessagesService) {}
  ngOnInit() {
    this.messagesService.getSentMessages().subscribe(res => console.log('dataSource', res))
  }
  connect(): Observable<any> {
    return Observable.of(this.messagesService.messages)
  }
  disconnect() {}
}
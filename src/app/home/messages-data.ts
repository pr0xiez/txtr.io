import { MessagesService } from '../core/services/messages.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


export class MessagesDataSource {
  constructor(private messagesService: MessagesService) {}
  connect(): Observable<any> {
    return Observable.of(this.messagesService.messages)
  }
  disconnect() {}
}
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../core/services/messages.service';
import { MessagesDataSource } from './messages-data';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private messagesService: MessagesService) { }
  displayedColumns = ['id', 'from', 'to', 'portalCode', 'scheduledDate']
  messages = new MessagesDataSource(this.messagesService)
  ngOnInit() {}
}

interface ISentMessage {

}
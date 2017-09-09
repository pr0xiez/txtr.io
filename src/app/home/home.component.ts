import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../core/services/messages.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private messagesService: MessagesService) { }
  messages

  ngOnInit() {
    this.messagesService.getSentMessages().subscribe(x => this.messages = x)
  }
}

interface ISentMessage {

}
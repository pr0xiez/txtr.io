import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { QueuedMessagesDataSource } from './queued-messages.data'
import { AuthService } from '../../core/services/auth.service'

@Component({
  selector: 'queued-messages',
  templateUrl: 'queued-messages.component.html',
  styleUrls: ['queued-messages.component.scss']
})

export class QueuedMessagesComponent {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns = ['id', 'messageId', 'from', 'to', 'portalCode', 'scheduledDate']
  messages = new QueuedMessagesDataSource(this.httpClient, this.authService)
}

interface ISentMessage {

}
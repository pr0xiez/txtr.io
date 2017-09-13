import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { QueuedMessagesDataSource } from './queued.data'
import { AuthService } from '../../core/services/auth.service'

@Component({
  templateUrl: 'queued.component.html',
  styleUrls: ['queued.component.scss']
})

export class QueuedMessagesComponent {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns = ['id', 'messageId', 'from', 'to', 'portalCode', 'scheduledDate']
  messages = new QueuedMessagesDataSource(this.httpClient, this.authService)
}

interface ISentMessage {

}
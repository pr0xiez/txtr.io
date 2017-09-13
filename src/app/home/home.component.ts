import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { MessagesDataSource } from './messages-data'
import { AuthService } from '../core/services/auth.service'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns = ['id', 'messageId', 'from', 'to', 'portalCode', 'scheduledDate']
  messages = new MessagesDataSource(this.httpClient, this.authService)
}

interface ISentMessage {

}
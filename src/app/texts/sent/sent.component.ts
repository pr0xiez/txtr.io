import { SentMessagesDataSource } from './sent.data';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from "../../core/services/auth.service";

@Component({
  templateUrl: 'sent.component.html',
  styleUrls: ['sent.component.scss']
})

export class SentComponent {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns = ['id', 'messageId', 'to', 'portalCode', 'scheduledDate']
  messages = new SentMessagesDataSource(this.httpClient, this.authService)
}
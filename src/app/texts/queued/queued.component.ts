import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { QueuedDataSource } from './queued.data'
import { AuthService } from '../../core/services/auth.service'
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description Displays queued text messages
 */

@Component({
  templateUrl: 'queued.component.html',
  styleUrls: ['queued.component.scss']
})

export class QueuedComponent {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns = ['id', 'messageId', 'from', 'to', 'portalCode', 'scheduledDate']
  messages = new QueuedDataSource(this.httpClient, this.authService)
}
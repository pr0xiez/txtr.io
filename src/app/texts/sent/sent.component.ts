import { MdPaginator } from '@angular/material';
import { SentMessagesDataSource } from './sent.data';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from "../../core/services/auth.service";

@Component({
  templateUrl: 'sent.component.html',
  styleUrls: ['sent.component.scss']
})

export class SentComponent implements OnInit {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  ngOnInit() {
    this.messagesSource = new SentMessagesDataSource(this.httpClient, this.authService, this.paginator)
  }

  @ViewChild(MdPaginator) paginator: MdPaginator

  displayedColumns = ['id', 'messageId', 'to', 'portalCode', 'scheduledDate']
  messagesSource: SentMessagesDataSource | null
}
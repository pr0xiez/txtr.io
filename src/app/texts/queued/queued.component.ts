import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/observable/fromEvent'
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
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

export class QueuedComponent implements OnInit {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns: string[] = ['id', 'messageId', 'to', 'templateVars', 'sendAt']
  messages: QueuedDataSource | null

  @ViewChild('filter') filter: ElementRef

  ngOnInit() {
    this.messages = new QueuedDataSource(this.httpClient, this.authService)
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)       // wait for user to stop typing for 300ms to initate search
      .distinctUntilChanged()  // only fire if the value of the filter box is different than last time observable fired
      .subscribe(() => {
        if (!this.messages) { return }
        this.messages.filter = this.filter.nativeElement.value
      })
  }
}
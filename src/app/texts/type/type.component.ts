import { TypesDataSource } from './type.data';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  templateUrl: 'type.component.html',
  styleUrls: ['type.component.scss']
})

export class TypeComponent {
  constructor(public httpClient: HttpClient, public authService: AuthService) { }
  displayedColumns = ['id', 'name', 'sendAfter', 'sendBefore', 'template']
  messageTypes = new TypesDataSource(this.httpClient, this.authService)
}
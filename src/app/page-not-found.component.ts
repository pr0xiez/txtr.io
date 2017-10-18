import { NavigationService } from './core/services/navigation.service'
import { Component } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  template: `
    <h1>Oops! Page Not Found!</h1>
    <button mat-raised-button color="primary" (click)="nS.navigateToQueuedTextsPage()">Go to Home</button>
  `,
  styles: [
    `
    :host {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      font-size: 20px;
    }
    `
  ]
})
export class PageNotFoundComponent {
  constructor(public nS: NavigationService) {}
}
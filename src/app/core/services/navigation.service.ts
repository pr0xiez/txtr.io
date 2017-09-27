import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NaviagationService {
  constructor(private router: Router) { }
  navigateToSentTexts() {
    this.router.navigate(['/texts/sent'])
  }
  navigateToQueuedTexts() {
    this.router.navigate(['/texts/queued'])
  }
  navigateToTextTypes() {
    this.router.navigate(['/texts/type'])
  }
}
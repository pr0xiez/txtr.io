import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}
  
  navigateToLoginPage() {
    this.router.navigate(['login'])
  }
  navigateToQueuedTextsPage() {
    this.router.navigate(['texts/queued'])
  }
  navigateToSentTextsPage() {
    this.router.navigate(['texts/sent'])
  }
  navigateToTextsTypePage() {
    this.router.navigate(['texts/type'])
  }
}
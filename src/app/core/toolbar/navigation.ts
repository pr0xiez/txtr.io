import { Router } from '@angular/router'

export class Navigation {
  constructor(private router: Router) {}

  public navigateToSentTexts() {
    this.router.navigate(['/sent'])
	}
	
  public navigateToQueuedTexts() {
    this.router.navigate(['/queued'])
	}
	
  public navigateToTextTypes() {
    this.router.navigate(['/type'])
  }
}
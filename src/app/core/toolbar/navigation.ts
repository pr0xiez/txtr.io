import { Router } from '@angular/router'

export class Navigation {
  constructor(private router: Router) {}

  public navigateToSentTexts() {
    this.router.navigate(['texts/sent'])
	}
	
  public navigateToQueuedTexts() {
    this.router.navigate(['texts/queued'])
	}
	
  public navigateToTextTypes() {
    this.router.navigate(['texts/type'])
  }
}
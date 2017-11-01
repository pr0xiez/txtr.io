import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}
  
  navigateToLoginPage() {
    this.router.navigate(['login'])
  }
  navigateToTextsTypePage() {
    this.router.navigate(['texts/type'])
  }
  naivgateToCustomersPage() {
    this.router.navigate(['customers'])
  }
}
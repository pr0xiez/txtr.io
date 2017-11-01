import { HttpClientTestingModule,  } from '@angular/common/http/testing'
import { TestBed, inject } from '@angular/core/testing'
import { Router, RouterModule } from '@angular/router'
import { NavigationService } from './navigation.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service'

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('AuthService', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [
        AuthService, 
        RouterModule,
        { provide: Router, useClass: MockRouter },
        NavigationService
      ]})
  })

  it('should initialize isAuthenticated to be false', inject([AuthService],
    (aS: AuthService) => {
      (localStorage.getItem('token') != undefined) ? expect(aS.isAuthenticated.value).toBe(true) : expect(aS.isAuthenticated.value).toBe(false)
    })
  )

  it('should return response from API on login', inject([AuthService],
    (aS: AuthService) => {
      aS.login({email: '', password: ''}).subscribe(x => expect(x).toBeDefined())
    })
  )

  it('should change isAuthenticated to true after successful login', inject([AuthService],
    (aS: AuthService) => {
      aS.isAuthenticated.next(false)
      aS.login({email: 'devAdmin@united-installs.com', password: 'United123!'})
        .subscribe((x: any) => {
          aS.isAuthenticated.subscribe(x => expect(x).toEqual(false))
        })
    })
  )

  it('should change isAuthenticated to false after logout', inject([AuthService],
    (aS: AuthService) => {
      aS.isAuthenticated.next(true)
      expect(aS.isAuthenticated.value).toBe(true)
      aS.logout()
      expect(aS.isAuthenticated.value).toBe(false)
    })
  )
})
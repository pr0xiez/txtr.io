import { browser, by, element } from 'protractor'

export class AppPage {
  navigateToRoot() {
    return browser.get('/')
  }

  getCurrentPage() {
    return browser.getCurrentUrl()
  }

  submitLoginFormWithValidCredentials() {
    element(by.css("input[formcontrolname='email']")).sendKeys('devAdmin@united-installs.com')
    element(by.css("input[formcontrolname='password']")).sendKeys('United123!')
    element(by.css("button[type='submit']")).click() 
  }
}

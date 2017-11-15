import { AppPage } from './app.po'

describe('txtr.io', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should take user to /login page upon first visit', () => {
    page.navigateToRoot()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/login')
  })

  it('should not let users navigate into site before logging in', () => {
    page.navigateTo('/texts/type')
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/login')
    page.navigateTo('/customers')
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/login')
  })

  it('should navigate directly to /texts/type page upon successful login', () => {
    page.navigateToRoot()
    page.submitLoginFormWithValidCredentials()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/texts/type')
  })

  it('should be able to navigate to /customers by hand after user has logged in', () => {
    page.navigateTo('customers')
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/customers')
  })

  it('should be able to navigate to /texts/type by hand after user has logged in', () => {
    page.navigateTo('texts/type')
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/texts/type')
  })

  it('should be able to navigate to /customers via click nav button', () => {
    page.clickCustomers()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/customers')
  })

  it('should be able to navigate to /texts/type via click nav button', () => {
    page.clickTextTypes()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/texts/type')
  })

  it('should unauthenticate the user on logout', () => {
    page.clickLogout()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49155/login')
  })
})
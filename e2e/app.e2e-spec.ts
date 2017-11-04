import { AppPage } from './app.po'

describe('txtr.io Login', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()


  })

  it('should take user to login page upon first visit', () => {
    page.navigateToRoot()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49152/login')
  })

  it('should navigate directly to texts/type page upon successful login', () => {
    page.navigateToRoot()
    page.submitLoginFormWithValidCredentials()
    expect(page.getCurrentPage().then(x => x)).toEqual('http://localhost:49152/texts/type')
  })
})

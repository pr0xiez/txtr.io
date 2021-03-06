import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  token: string

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
    }
    const _req = req.clone({setHeaders: {authentication: this.token}})
    
    
    if(localStorage.getItem('token')) {
      console.log('intercepted request', _req)
      return next
        .handle(_req)
        .do((ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            console.log('intercepted response', ev)
          }
          return ev
        })
        .catch(res => {
          if (res instanceof HttpErrorResponse) {
            console.log('processing error response', res)
          }
          return Observable.throw(res)
        })
    }
      
    console.log('intercepted request', req)
    return next
      .handle(req)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('intercepted response', ev)
        }
        return ev
      })
      .catch(res => {
        if (res instanceof HttpErrorResponse) {
          console.log('processing error response', res)
        }
        return Observable.throw(res)
      })
  }
}
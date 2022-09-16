import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: { Authorization: "" + sessionStorage.getItem('token') }
      })
    }else{
      this.router.navigate(['/login'])
    }

    return next.handle(req);

  }

}

export const authInterceptor = [
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi:true }
]

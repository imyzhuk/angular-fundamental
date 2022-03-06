import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {SessionStorageService} from "../services/session-storage/session-storage.service";
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private sessionStorageService: SessionStorageService,
    private auth: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sessionStorageService.getToken();
    if(token
      && (request.url.includes('me')
        || request.url.includes('logout')
        || request.url.includes('courses')
        || request.url.includes('authors')
      )
    ){
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: token
        })
      })
    }
    return next.handle(request)
      .pipe(
        tap(
          null,
          (err) => {
            if (err instanceof HttpErrorResponse && err.status === 401){
              // this.auth.logout();
              // this.router.navigate(['login'])
            }
          }
        )
      );
  }
}

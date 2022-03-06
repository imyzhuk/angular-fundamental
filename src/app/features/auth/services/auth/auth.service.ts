import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConstants} from "../../../../constants/app-constants";
import {Author, User} from "../../../../models/user-types";
import {BehaviorSubject, catchError, Observable, of, share, switchMap, tap} from "rxjs";
import {
  ErrorResponse,
  LoginResponse,
  Response,
  SuccessfulRegistrationResponse
} from "../../../../models/response-types";
import {SessionStorageService} from "../session-storage/session-storage.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly backendBaseUrl: string;
  isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable()
  isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable()
  name$$ = new BehaviorSubject<string | null>(null);
  public name$: Observable<string | null> = this.name$$.asObservable()

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService,
              private router: Router
  ) {
    this.backendBaseUrl = AppConstants.BACKEND_BASE_URL;
  }

  login(user: User){
    this.isLoading$$.next(true)
    this.http.post<LoginResponse>(this.backendBaseUrl + "/login", user)
      .pipe(
        catchError(err => of(err)),
        share(),
      )
      .subscribe(
        (response) => {
        if(!response.successful){
          this.isAuthorized$$.next(false);
        } else {
          this.sessionStorageService.setToken(response.result)
          this.name$$.next(response.user.name || response.user.email);
          this.isAuthorized$$.next(true)
        }
      },
        null,
        () => this.isLoading$$.next(false)
        );
  }

  logout(){
    this.http.delete(this.backendBaseUrl + "/logout")
      .pipe(
        catchError(err => of(err)),
        share(),
      )
      .subscribe((response) => {
        if(!response){
          this.isAuthorized$$.next(false);
          this.sessionStorageService.deleteToken()
          this.name$$.next(null);
          this.router.navigate(['login']);
        } else {
          this.isAuthorized$$.next(true)
        }
      });
  }

  register(user: User){
    return this.http.post<ErrorResponse | SuccessfulRegistrationResponse>(this.backendBaseUrl + "/register", user)
  }
}

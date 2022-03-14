import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../../../constants/app-constants";
import {User} from "../../../../models/user-types";
import {BehaviorSubject, Observable} from "rxjs";
import {ErrorResponse, LoginResponse, SuccessfulRegistrationResponse} from "../../../../models/response-types";
import {SessionStorageService} from "../session-storage/session-storage.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable()
  isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable()
  name$$ = new BehaviorSubject<string | null>(null);
  public name$: Observable<string | null> = this.name$$.asObservable()
  private readonly backendBaseUrl: string;

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService,
              private router: Router
  ) {
    this.backendBaseUrl = AppConstants.BACKEND_BASE_URL;
  }

  login(user: User){
    return this.http.post<LoginResponse>(this.backendBaseUrl + "/login", user)
  }

  logout() {
    return this.http.delete(this.backendBaseUrl + "/logout")
    // .pipe(
    //   catchError(err => of(err)),
    //   share(),
    // )
    // .subscribe((response) => {
    //   if(!response){
    //     this.isAuthorized$$.next(false);
    //     this.sessionStorageService.deleteToken()
    //     this.name$$.next(null);
    //     this.router.navigate(['login']);
    //   } else {
    //     this.isAuthorized$$.next(true)
    //   }
    // });
  }

  register(user: User){
    return this.http.post<ErrorResponse | SuccessfulRegistrationResponse>(this.backendBaseUrl + "/register", user)
  }
}

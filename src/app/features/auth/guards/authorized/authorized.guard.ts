import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";
import {AuthFacade} from "../../../../auth/store/auth.facade";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {
  isAuthorized: boolean = false;

  constructor(private auth: AuthService,
              private router: Router,
              private authFacade: AuthFacade
  ) {
    this.authFacade.isAuthorized$.subscribe(isAuthorized => this.isAuthorized = isAuthorized);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized ? true : this.router.parseUrl('/login');
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
  isAuthorized: boolean = false;

  constructor(private auth: AuthService,
              private router: Router
  ) {
    this.auth.isAuthorized$.subscribe(isAuthorized => this.isAuthorized = isAuthorized);
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized ? this.router.parseUrl('/courses') : true;
  }

}

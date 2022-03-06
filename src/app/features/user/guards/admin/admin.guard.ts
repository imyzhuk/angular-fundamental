import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserStoreService} from "../../services";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAdmin: boolean = false;

  constructor(
    private userStoreService: UserStoreService,
    private router: Router
  ) {
    this.userStoreService.isAdmin$
      .subscribe(
        (isAdmin) => this.isAdmin = isAdmin
      )
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin ? true : this.router.parseUrl('/courses');
  }

}

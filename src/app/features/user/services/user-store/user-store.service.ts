import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {AuthService} from "../../../auth/services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  public isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();
  private name$$ = new BehaviorSubject<string | null>(null);
  public name$: Observable<string | null> = this.name$$.asObservable();

  constructor(private userService: UserService, private auth: AuthService) { }

  getUser(){
    const user$ = this.userService.getUser();
    if(!user$) return;
    user$
      .subscribe(response => {
        if(response.successful){
          this.auth.isAuthorized$$.next(true)
          this.auth.name$$.next(response.result.name || response.result.email)
          this.isAdmin$$.next(response.result.role === 'admin')
        }
      })
  }
}

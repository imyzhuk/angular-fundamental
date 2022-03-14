import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";
import {UserService} from "../../features/user/services";
import {map, mergeMap, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {requestLoginSuccess} from "../../auth/store/auth.actions";
import {SessionStorageService} from "../../features/auth/services/session-storage/session-storage.service";


@Injectable()
export class UserEffects {

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
      ofType(requestCurrentUser),
      mergeMap(() => this.userService.getUser()
        .pipe(
          tap(response => response.successful && this.sessionStorageService.getToken() && this.store.dispatch(requestLoginSuccess({
            //@ts-ignore
            token: this.sessionStorageService.getToken()
          }))),
          map(response => response.successful
            ? requestCurrentUserSuccess({
              name: response.result.name || response.result.email,
              isAdmin: response.result.role === 'admin'
            })
            : requestCurrentUserFail({
              error: "Error"
            })
          )
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<State>,
    private sessionStorageService: SessionStorageService
  ) {
  }
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, of} from "rxjs";
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
  requestRegister,
  requestRegisterFail,
  requestRegisterSuccess
} from "./auth.actions";
import {AuthService} from "../../features/auth/services/auth/auth.service";
import {SessionStorageService} from "../../features/auth/services/session-storage/session-storage.service";
import {UserFacade} from "../../user/store/user.facade";


@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
      ofType(requestLogin),
      mergeMap((action) => this.authService.login(action.user)
        .pipe(
          catchError(err => of(err)),
          map(response => {
            if (response.successful) {

              this.sessionStorageService.setToken(response.result);
              return requestLoginSuccess({
                token: response.result
              })
            }
            return requestLoginFail({
              errorMessage: "The user wasn't found(("
            })
          })
        )
      )
    )
  )

  register$ = createEffect(() => this.actions$.pipe(
      ofType(requestRegister),
      mergeMap((action) => this.authService.register(action.user)
        .pipe(
          catchError(err => of(err)),
          map(response => {
            //@ts-ignore
            return response?.successful ? requestRegisterSuccess() : requestRegisterFail({errorMessage: response.error.errors[0]})
          })
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService,
    private userFacade: UserFacade
  ) {
  }
}

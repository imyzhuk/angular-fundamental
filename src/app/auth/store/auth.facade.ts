import {Injectable} from "@angular/core";
import {State} from "../../store";
import {select, Store} from "@ngrx/store";
import {getSpecificErrorMessage, getToken, isRegistrated, isUserAuthorized} from "./auth.selectors";
import {clearError, requestLogin, requestLogout, requestRegister} from "./auth.actions";
import {User} from "../../models/user-types";
import {clearUserInfo} from "../../user/store/user.actions";

@Injectable()
export class AuthFacade {
  isAuthorized$ = this.store.pipe(select(isUserAuthorized));
  isRegistered$ = this.store.pipe(select(isRegistrated));
  getToken$ = this.store.pipe(select(getToken));
  getLoginErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));

  constructor(private store: Store<State>) {
  }

  login(user: User): void {
    this.store.dispatch(requestLogin({user}));
  }

  logout(): void {
    this.store.dispatch(requestLogout());
    this.store.dispatch(clearUserInfo())
  }

  register(user: User): void {
    this.store.dispatch(requestRegister({user}));
  }

  clearError() {
    this.store.dispatch(clearError())
  }
}

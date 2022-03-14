import {Injectable} from "@angular/core";
import {getName, isAdmin} from "./user.selectors";
import {requestCurrentUser} from "./user.actions";
import {State} from "../../store";
import {select, Store} from "@ngrx/store";

@Injectable()
export class UserFacade {
  name$ = this.store.pipe(select(getName));

  isAdmin$ = this.store.pipe(select(isAdmin));

  constructor(private store: Store<State>) {
  }

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }
}

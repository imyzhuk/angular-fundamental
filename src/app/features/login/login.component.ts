import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from "../auth/services/session-storage/session-storage.service";
import {Router} from "@angular/router";
import {AuthFacade} from "../../auth/store/auth.facade";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  isAuthorized: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;


  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private auth: AuthFacade
  ) {
    this.auth.getLoginErrorMessage$.subscribe(error => this.error = error)
  }

  ngOnInit(): void {
    this.auth.isAuthorized$.subscribe(isAuthorized => {
      this.isAuthorized = isAuthorized;
      if (isAuthorized) {
        this.router.navigate([''])
      }
    });
  }


  onSubmit(event: Event) {
    event.preventDefault()
    //@ts-ignore
    this.auth.login({
        password: this.password,
        email: this.email,
      }
    )
  }
}

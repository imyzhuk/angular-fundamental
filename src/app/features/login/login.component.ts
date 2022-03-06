import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/services/auth/auth.service";
import {catchError, of, tap} from "rxjs";
import {SessionStorageService} from "../auth/services/session-storage/session-storage.service";
import {Router} from "@angular/router";

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


  constructor(private auth: AuthService,
              private sessionStorageService: SessionStorageService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.isAuthorized$.subscribe(isAuthorized => {
      this.isAuthorized = isAuthorized;
      if(isAuthorized){
        this.router.navigate([''])
      }
    });
    this.auth.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
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

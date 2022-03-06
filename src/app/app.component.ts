import { Component } from '@angular/core';
import {AuthService} from "./features/auth/services/auth/auth.service";
import {Router} from "@angular/router";
import {AuthorsStoreService, CoursesStoreService} from "./shared/services";
import {UserStoreService} from "./features/user/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHelpModalOpened: boolean = false;
  modalResult: boolean | null = null;
  title = 'courses-app';
  isAuthorized: boolean = false
  name: string | null = null;
  isLoading: boolean = false

  constructor(private auth: AuthService,
              private router: Router,
              private coursesStoreService: CoursesStoreService,
              private authorsStoreService: AuthorsStoreService,
              private userStoreService: UserStoreService
              ) {
    this.coursesStoreService.isLoading$.subscribe(isLoading => this.isLoading = isLoading)
    this.auth.isAuthorized$.subscribe(isAuthorized => this.isAuthorized = isAuthorized);
    this.auth.name$.subscribe(name => this.name = name);
  }

  ngOnInit(){
    this.getAuthors();
    this.getCourses();
    this.getUser();
  }


  openHelpModal(){
    this.isHelpModalOpened = true;
  }

  clickLoginIcon(){
    this.isAuthorized ? this.auth.logout() : this.router.navigate(['login'])
  }

  getCourses(){
    this.coursesStoreService.getAll();
  }

  getAuthors(){
    this.authorsStoreService.getAll();
  }

  getUser(){
    this.userStoreService.getUser();
  }

}

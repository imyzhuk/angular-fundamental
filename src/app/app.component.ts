import {Component} from '@angular/core';
import {AuthService} from "./features/auth/services/auth/auth.service";
import {Router} from "@angular/router";
import {AuthorsStoreService, CoursesStoreService} from "./shared/services";
import {UserStoreService} from "./features/user/services";
import {UserFacade} from "./user/store/user.facade";
import {AuthFacade} from "./auth/store/auth.facade";
import {SessionStorageService} from "./features/auth/services/session-storage/session-storage.service";

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
              private userStoreService: UserStoreService,
              public user: UserFacade,
              public authFacade: AuthFacade,
              private sessionStorageService: SessionStorageService
  ) {
    // this.auth.isAuthorized$.subscribe(isAuthorized => this.isAuthorized = isAuthorized);
    // this.auth.name$.subscribe(name => this.name = name);
  }

  ngOnInit() {
    this.user.getCurrentUser()
    this.user.name$
      .subscribe(name => this.name = name)
    this.authFacade.isAuthorized$.subscribe(isAuthorized => {
      this.isAuthorized = isAuthorized
    })
    this.getAuthors();
    this.getCourses();
    // this.getUser();
  }


  openHelpModal() {
    this.isHelpModalOpened = true;
  }

  clickLoginIcon() {
    this.isAuthorized
      ? this.auth.logout()
        .subscribe((response) => {
          if (!response) {
            this.authFacade.logout();
            this.sessionStorageService.deleteToken()
            this.router.navigate(['login']);
          }
        })
      : this.router.navigate(['login'])
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

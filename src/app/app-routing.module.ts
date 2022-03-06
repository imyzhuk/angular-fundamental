import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {CoursesComponent} from "./features/courses/courses.component";
import {CourseFormComponent} from "./features/courses/components";
import {CourseComponent} from "./features/course/course.component";
import {AuthorizedGuard, NotAuthorizedGuard} from "./features/auth/guards";
import {AdminGuard} from "./features/user/guards";

const routes: Routes = [
  { path: '',   redirectTo: '/courses', pathMatch: 'full'},
  {path: "login", component: LoginComponent, canActivate: [NotAuthorizedGuard]},
  {path: "registration", component: RegistrationComponent, canActivate: [NotAuthorizedGuard]},
  {
    path: "courses",
    pathMatch: 'full',
    canLoad: [AuthorizedGuard],
  loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
  },
  {path: "courses/add", component: CourseFormComponent, canActivate: [AdminGuard]},
  {path: "courses/edit/:id", component: CourseFormComponent, canActivate: [AdminGuard]},
  {path: "courses/:id", component: CourseComponent, canLoad: [AuthorizedGuard],
    loadChildren: () => import('./features/course/course.module').then(m => m.CourseModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

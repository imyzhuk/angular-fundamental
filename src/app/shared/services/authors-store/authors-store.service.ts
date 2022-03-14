import { Injectable } from '@angular/core';
import {BehaviorSubject, forkJoin, map, Observable, share, switchMap, tap} from "rxjs";
import {AuthorsService} from "../authors/authors.service";
import {CourseType} from "../../../models/course-types";
import {Author} from "../../../models/user-types";

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private authors$$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([])
  public authors$: Observable<Author[]> = this.authors$$.asObservable();
  isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable()

  constructor(private authorsService: AuthorsService) {
  }

  getAll(){
    this.isLoading$$.next(true)
    this.authorsService.getAll()
      .pipe(
        share(),
      )
      .subscribe(({result}) => {
        this.authors$$.next(result);
      },
        null,
        () => this.isLoading$$.next(false)
      );
  }

  addAuthors(authors: string[]){
    this.isLoading$$.next(true);
    return forkJoin(
      ...authors.map(author => this.authorsService.addAuthor(author))
    )
      .pipe(
        map((responses) => responses.filter(response => response.successful)),
        tap(responses => {
          const newAuthors = responses.map(response => response.result);
          this.authors$$.next(this.authors$$.value.concat(newAuthors));
        }),
        map((responses) => {
          return responses.map(response => response.result.id)
        }),
        tap(() => this.isLoading$$.next(false)),
      )
  }
}

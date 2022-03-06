import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UUID} from 'uuid-generator-ts';
import {AppConstants} from '../../../constants/app-constants'
import {Response} from "../../../models/response-types";
import {Author} from "../../../models/user-types";
import {forkJoin, map} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private readonly backendBaseUrl: string;
  private author: string

  constructor(private http: HttpClient) {
    this.backendBaseUrl = AppConstants.BACKEND_BASE_URL;
    this.author = "";
  }

  getAll(){
    return this.http.get<Response<Author[]>>(this.backendBaseUrl + "/authors/all");
  }

  addAuthor(authorName: string){
    const authorId = new UUID().getDashFreeUUID();
    return this.http.post<Response<Author>>(this.backendBaseUrl + "/authors/add", {
      name: authorName,
      id: authorId
    })
  }
}

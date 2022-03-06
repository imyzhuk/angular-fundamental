import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../../../constants/app-constants";
import {UserResponse} from "../../../../models/response-types";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly backendBaseUrl: string;

  constructor(private http: HttpClient) {
    this.backendBaseUrl = AppConstants.BACKEND_BASE_URL;
  }

  getUser(){
    return this.http.get<UserResponse>(this.backendBaseUrl + "/users/me");
  }

}

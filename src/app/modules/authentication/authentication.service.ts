import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthenticationService {

  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("token");
    return token === "JWT";
  }

  isLoggedInAsync(): Promise<boolean> {

    const token = localStorage.getItem("token");
    return Promise.resolve(token === "JWT");
  }

}

import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {

  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("token");
    return token === "JWT";
  }

}

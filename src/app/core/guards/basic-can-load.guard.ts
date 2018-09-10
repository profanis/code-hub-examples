import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class BasicCanLoadGuard implements CanLoad {
  constructor() { }

  canLoad(route: Route) {
    console.log("You can not load this module");
    return true;
  }
}

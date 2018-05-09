import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Bugs } from "./bugs.model";
import { BugsService } from "./bugs.service";


@Injectable()
export class BugsResolver implements Resolve<Bugs[]> {

  constructor(private bugsService: BugsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bugs[]> {
    return this.bugsService.getBugs()
      .map(bugs => bugs as Bugs[]);
  }

}

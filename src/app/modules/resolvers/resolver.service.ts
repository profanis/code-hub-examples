import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ResolverModel } from './resolver.model';
import { delay } from 'rxjs/operators';

@Injectable()
export class ResolverService {

  getData(): Observable<ResolverModel[]> {
    return of([
      {id: 1, name: 'one'},
      {id: 2, name: 'two'},
      {id: 3, name: 'three'},
    ]).pipe(delay(4000));
  }
}

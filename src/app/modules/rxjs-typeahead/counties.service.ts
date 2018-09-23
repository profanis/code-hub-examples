import 'rxjs/add/observable/of';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }


  search(query: string): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${query}`).pipe(
      catchError(c => Observable.of(null))
    )
  }

}


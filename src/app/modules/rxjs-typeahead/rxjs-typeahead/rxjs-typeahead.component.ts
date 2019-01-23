import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';

import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { catchError, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

import { CountriesService } from '../counties.service';


@Component({
  selector: 'app-rxjs-typeahead',
  templateUrl: './rxjs-typeahead.component.html',
  styleUrls: ['./rxjs-typeahead.component.scss'],
  providers: [CountriesService]
})
export class RxjsTypeaheadComponent implements AfterViewInit {

  $items: Observable<any>;
  @ViewChild("searchField") searchField: ElementRef;

  constructor(private countriesService: CountriesService) { }

  ngAfterViewInit(): void {
    this.$items = Observable.fromEvent(this.searchField.nativeElement, "keyup").pipe(
      debounceTime(500),
      switchMap((c: KeyboardEvent) => this.countriesService.search(this.searchField.nativeElement.value)),
      catchError(c => Observable.of(null))
    );
  }

}

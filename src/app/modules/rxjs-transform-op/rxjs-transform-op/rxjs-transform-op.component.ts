import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Observable } from "rxjs";
import { map, mergeAll, mergeMap, switchMap } from "rxjs/operators";

@Component({
  selector: "app-rxjs-transform-op",
  templateUrl: "./rxjs-transform-op.component.html",
  styleUrls: ["./rxjs-transform-op.component.scss"]
})
export class RxjsTransformOpComponent implements AfterViewInit {
  @ViewChild("button")
  buttonEl: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // this.callBackHell();
    // this.higherOrder();
    // this.higherOrderMergeAll();
    // this.higherOrderMergeMap();
    this.higherOrderSwitchMap();
  }

  private callBackHell() {
    Observable.fromEvent(this.buttonEl.nativeElement, "click")
      .subscribe(cl => Observable.interval(1000)
                          .subscribe(c => console.log(c)) );
  }

  /**
   * This wont subscribe the inner observable. The observables are lazy
   */
  private higherOrder() {
    const source$ = Observable.fromEvent(this.buttonEl.nativeElement, "click");
    const interval$ = Observable.interval(1000);

    const result$ = source$.pipe(
      map(c => interval$)
    );

    result$.subscribe(c => console.log(c));
  }

  private higherOrderMergeAll() {
    const source$ = Observable.fromEvent(this.buttonEl.nativeElement, "click");
    const interval$ = Observable.interval(1000);

    const result$ = source$.pipe(
      map(c => interval$),
      mergeAll()
    );

    result$.subscribe(c => console.log(c))
  }

  private higherOrderMergeMap() {
    const source$ = Observable.fromEvent(this.buttonEl.nativeElement, "click");
    const interval$ = Observable.interval(1000);

    const result$ = source$.pipe(
      mergeMap(c => interval$)
    );

    result$.subscribe(c => console.log(c));
  }

  /**
   * Cancel the previous stream
   */
  private higherOrderSwitchMap() {
    const source$ = Observable.fromEvent(this.buttonEl.nativeElement, "click");
    const interval$ = Observable.interval(1000);

    const result$ = source$.pipe(
      switchMap(c => interval$)
    );

    result$.subscribe(c => console.log(c))
  }
}

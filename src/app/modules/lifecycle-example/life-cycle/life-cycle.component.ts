import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges, DoCheck, AfterViewInit, ContentChild } from "@angular/core";

@Component({
  selector: "app-life-cycle",
  templateUrl: "./life-cycle.component.html",
  styleUrls: ["./life-cycle.component.css"]
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit {

  firstName: string;

  constructor() { }

  ngOnInit() {
    console.log("Parent On init");
  }

  ngAfterContentInit(): void {
    console.log("Parent After content init");
  }

  ngAfterViewInit(): void {
    console.log("Parent After view init.");
  }

  /**
   * It runs two times because we have ngModel attached to it
   */
  ngDoCheck(): void {
    console.log("Parent Do Check");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parentOnChnages");
  }

}

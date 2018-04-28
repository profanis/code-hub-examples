import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges, DoCheck } from "@angular/core";

@Component({
  selector: "app-life-cycle",
  templateUrl: "./life-cycle.component.html",
  styleUrls: ["./life-cycle.component.css"]
})
export class LifeCycleComponent implements OnInit, AfterContentInit, DoCheck {

  firstName: string;

  constructor() { }

  ngOnInit() {
    console.log("On init");
  }

  ngAfterContentInit(): void {
    console.log("After content init");
  }

  ngDoCheck(): void {
    console.log("Do Check");
  }

}

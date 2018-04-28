import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component-interaction-parent",
  template: `
      <h3>Parent Component</h3>
      Enter your name:
      <input type="text" [(ngModel)]="firstName">

      <app-component-interaction-child [firstName]="firstName" (doSearch)="searchFromChild()">
      </app-component-interaction-child>
  `,
  styleUrls: ["./component-interaction-parent.component.css"]
})
export class ComponentInteractionParentComponent implements OnInit {

  firstName: string;


  constructor() { }

  ngOnInit() {
  }

  searchFromChild() {
    console.log("Child component triggered the button!");
  }

}

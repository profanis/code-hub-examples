import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-component-interaction-child",
  template: `
    <p>List items from child component</p>
    <ul>
      <li *ngFor="let item of items">
        {{item}}
      </li>
    </ul>

    <button type="button" (click)="allowParentToDisplayTheList()">Toggle the list</button>
    <hr />
  `,
  styleUrls: ["./component-interaction-child.component.scss"]
})
export class ComponentInteractionChildComponent {

  @Input() items: string[];
  @Output() displayTheList = new EventEmitter<boolean>();

  displayTheListFlag = false;

  allowParentToDisplayTheList() {
    this.displayTheListFlag = !this.displayTheListFlag;
    this.displayTheList.emit(this.displayTheListFlag);
  }

}

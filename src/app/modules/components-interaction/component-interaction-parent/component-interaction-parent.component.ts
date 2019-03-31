import { Component } from "@angular/core";

@Component({
  selector: "app-component-interaction-parent",
  template: `
    <app-component-interaction-child [items]="getItems()" (displayTheList)="toggleDisplayList($event)">
    </app-component-interaction-child>

    <div *ngIf="iCanDisplayTheList">
      <p>List items from parent component</p>
      <ul>
        <li *ngFor="let item of items">
          {{item}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./component-interaction-parent.component.scss"]
})
export class ComponentInteractionParentComponent {

  items = ["one", "two", "three"];
  iCanDisplayTheList = false;

  getItems() {
    return this.items;
  }

  toggleDisplayList(event) {
    this.iCanDisplayTheList = event;
  }

}

import { Component, OnInit } from "@angular/core";
import { BuiltInDirectivesService } from "../built-in-directives.service";

@Component({
  selector: "app-built-in-directives",
  templateUrl: "./built-in-directives.component.html",
  styleUrls: ["./built-in-directives.component.css"]
})
export class BuiltInDirectivesComponent implements OnInit {
  
  items: String[];

  constructor(private builtInDirectivesService: BuiltInDirectivesService) { }

  ngOnInit() {
    this.items = this.builtInDirectivesService.getItems();
  }

}
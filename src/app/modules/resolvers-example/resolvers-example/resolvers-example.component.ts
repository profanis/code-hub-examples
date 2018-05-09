import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Bugs } from "./../bugs.model";

@Component({
  selector: "app-resolvers-example",
  templateUrl: "./resolvers-example.component.html",
  styleUrls: ["./resolvers-example.component.css"]
})
export class ResolversExampleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { bugs: Bugs[]}) => {
      console.log(data.bugs);
    });
  }

}

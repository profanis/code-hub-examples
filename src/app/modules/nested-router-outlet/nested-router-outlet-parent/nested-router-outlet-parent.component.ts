import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nested-router-outlet-parent',
  templateUrl: './nested-router-outlet-parent.component.html',
  styleUrls: ['./nested-router-outlet-parent.component.css']
})
export class NestedRouterOutletParentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
  }

}

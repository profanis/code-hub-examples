import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { OrderModel } from "../order-model";
import { RxjsOrdersService } from "../rxjs-orders.service";

@Component({
  selector: "app-rxjs-orders",
  templateUrl: "./rxjs-orders.component.html",
  styleUrls: ["./rxjs-orders.component.scss"]
})
export class RxjsOrdersComponent implements OnInit {
  $orders: Observable<OrderModel[]>;

  constructor(private rxjsOrdersService: RxjsOrdersService) {}

  ngOnInit() {
    this.$orders = this.rxjsOrdersService.getOrders();
  }
}

import { Component, OnInit } from '@angular/core';
import { RxjsOrdersService } from '../rxjs-orders.service';
import { OrderModel } from '../order-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rxjs-orders',
  templateUrl: './rxjs-orders.component.html',
  styleUrls: ['./rxjs-orders.component.css']
})
export class RxjsOrdersComponent implements OnInit {

  $orders: Observable<OrderModel[]>;

  constructor(private rxjsOrdersService: RxjsOrdersService) { }

  ngOnInit() {
    this.$orders = this.rxjsOrdersService.getOrders();
  }

}

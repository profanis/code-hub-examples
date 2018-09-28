import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { OrderModel } from "./order-model";
import { ProductModel } from "./product-model";

@Injectable()
export class RxjsOrdersService {

    orders: OrderModel[] = [
      {
        "user": "User1",
        "products": [
          {
            "name": "Shoe 1",
            "desc": "foo",
            "price": 50
          },
          {
            "name": "Shoe 2",
            "desc": "foo",
            "price": 70
          },
          {
            "name": "Shoe 3",
            "desc": "foo",
            "price": 100
          }
        ]
      },
      {
        "user": "User2",
        "products": [
          {
            "name": "Shoe 1",
            "desc": "foo",
            "price": 50
          },
          {
            "name": "Shoe 2",
            "desc": "foo",
            "price": 70
          },
          {
            "name": "Shoe 3",
            "desc": "foo",
            "price": 100
          }
        ]
      }
    ]

  constructor() { }

  getOrders(): Observable<OrderModel[]> {

    const byUser = (user: string) => (order: OrderModel) => order.user === user;
    const byPrice = (price: number) => (product: ProductModel) => product.price >= price;

    return Observable.of(this.orders).pipe(
      map((orders: OrderModel[]) =>  orders.filter(byUser("User1"))),
      map((orders: OrderModel[]) =>  {
        return orders.map(o => {
          o.products = o.products.filter(byPrice(70))
          return o;
        })
      })
    )
  }
}

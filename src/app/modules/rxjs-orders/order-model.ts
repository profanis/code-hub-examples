import { ProductModel } from "./product-model";

export interface OrderModel {
  user: string;
  products: ProductModel[];
}

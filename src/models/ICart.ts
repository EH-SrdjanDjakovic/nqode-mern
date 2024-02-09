import { IProduct } from "./IProduct";
export interface ICart {
  id: string;
  products: Array<IProduct>;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
}

import { Client } from "./Client";
import { Product } from "./Product";
export interface Budget {
  id: number;
  client: Client;
  product: Product;
}

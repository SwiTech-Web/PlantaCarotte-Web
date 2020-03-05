import {User} from "./user.model";
import {Product} from "./product.model";

export interface RentRequest {
  id : string;
  user: User;
  product: Product;
}

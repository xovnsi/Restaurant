import {CartItems} from "./cartItems";

export class Cart{
  items:CartItems[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;
}

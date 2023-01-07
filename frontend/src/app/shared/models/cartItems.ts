import {Dishes} from "./Dishes";

export class CartItems{
  quantity:number = 1;
  price: number = this.dish.price;

  constructor(public dish:Dishes) {
  }

}

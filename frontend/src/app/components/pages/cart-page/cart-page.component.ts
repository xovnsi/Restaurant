import { Component } from '@angular/core';
import {Cart} from "../../../shared/models/Cart";
import {CartService} from "../../../services/cart.service";
import {CartItems} from "../../../shared/models/cartItems";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(public cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart) =>{
      this.cart = cart;
    })
  }

  // removeFromCart(cartItem:CartItems){
  //   this.cartService.removeFromCart(cartItem.dish.id);
  // }
  //
  // changeQuantity(cartItem:CartItems, quantityInString:string){
  //   const quantity = parseInt(quantityInString);
  //   this.cartService.changeQuantity(cartItem.dish.id, quantity);
  // }
}

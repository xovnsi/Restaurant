import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Cart} from "../shared/models/Cart";
import {Dishes} from "../shared/models/Dishes";
import {CartItems} from "../shared/models/cartItems";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor(private router: Router) { }

  addToCart(dish: Dishes):void{
    let cartItem = this.cart.items.find(item => item.dish.id == dish.id);
    if(cartItem) {
      this.changeQuantity(dish.id, cartItem.quantity);
      // dish.quantity -= 1;
      return;
    }
    this.cart.items.push(new CartItems(dish))
    this.setCartToLocalStorage();
    // dish.quantity -= 1;
  }

  removeFromCart(dish: Dishes):void{
    let cartItem = this.cart.items.find(item => item.dish.id == dish.id)
    // @ts-ignore
    if(cartItem.quantity > 1){
      // @ts-ignore
      cartItem.quantity -= 1;
      // @ts-ignore
      cartItem.price -= dish.price;
      this.setCartToLocalStorage();
      return;
    }
    this.cart.items = this.cart.items.filter(item => item.dish.id != dish.id);
    this.setCartToLocalStorage();
  }


  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.dish.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity + 1;
    cartItem.price = (quantity + 1) * cartItem.dish.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  orderDishes(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
    this.router.navigateByUrl('/');
    // dish.quantity += 1;
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}

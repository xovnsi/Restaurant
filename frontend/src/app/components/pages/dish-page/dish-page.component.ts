import { Component } from '@angular/core';
import {Dishes} from "../../../shared/models/Dishes";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {CartService} from "../../../services/cart.service";
import {CartItems} from "../../../shared/models/cartItems";

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.css']
})
export class DishPageComponent {
  dish!: Dishes;
  orderDisabled: boolean = false;
  resignDisabled: boolean = false;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) =>{
        if(params.id)
          foodService.getDishById(params.id).subscribe((serverDish) => {
            this.dish = serverDish;
          });
    })
  }

  addToCart(){
    // if(this.dish.quantity == 0){
    //   this.orderDisabled = true;
    // }
    // if(this.dish.quantity < this.dish.maxQuantity){
    //   this.resignDisabled = false;
    // }

    this.cartService.addToCart(this.dish)
    this.router.navigateByUrl('/cart-page');
  }

  removeFromCart(dish:Dishes){
    // if(dish.quantity == this.dish.maxQuantity){
    //   this.resignDisabled = true;
    // }
    // if(dish.quantity == 1){
    //   this.orderDisabled = false;
    // }

    this.cartService.removeFromCart(dish);
    this.router.navigateByUrl('/cart-page');
    dish.quantity += 1;

  }
}

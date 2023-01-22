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

  constructor(activatedRoute:ActivatedRoute, private foodService:FoodService, private cartService:CartService,
              private router: Router) {
    activatedRoute.params.subscribe((params) =>{
        if(params.id)
          foodService.getDishById(params.id).subscribe((serverDish) => {
            this.dish = serverDish;
          });
    })
  }

  addToCart(){
    // this.dish.quantity -= 1;
    this.foodService.addToCart(this.dish);
    this.cartService.addToCart(this.dish)
    this.router.navigateByUrl('/cart-page');
  }

  removeFromCart(dish:Dishes){
    this.cartService.removeFromCart(dish);
    this.router.navigateByUrl('/cart-page');
    // dish.quantity += 1;
  }
}

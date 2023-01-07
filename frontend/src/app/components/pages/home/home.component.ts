import { Component } from '@angular/core';
import {Dishes} from "../../../shared/models/Dishes";
import {FoodService} from "../../../services/food.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dishes:Dishes[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute, private cartService:CartService) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.dishes = foodService.getAllDishesBySearch(params.searchTerm);
      else if(params.tag)
        this.dishes = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.dishes = foodService.getAll();
    })
  }

  // addToCart(){
  //   this.cartService.addToCart(this.dishes);
  //   this.router.navigateByUrl('/cart-page');
  // }
}

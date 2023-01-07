import { Component } from '@angular/core';
import {Dishes} from "../../../shared/models/Dishes";
import {FoodService} from "../../../services/food.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dishes:Dishes[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute, private cartService:CartService) {
    let dishesObservable: Observable<Dishes[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        dishesObservable= foodService.getAllDishesBySearch(params.searchTerm);
      else if(params.tag)
        dishesObservable = this.foodService.getAllFoodsByTag(params.tag);
      else
        dishesObservable = foodService.getAll();

      dishesObservable.subscribe((serverDishes) => {
        this.dishes = serverDishes;
      })
    })
  }

  // addToCart(){
  //   this.cartService.addToCart(this.dishes);
  //   this.router.navigateByUrl('/cart-page');
  // }
}

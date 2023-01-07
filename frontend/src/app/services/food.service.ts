import { Injectable } from '@angular/core';
import {Dishes} from "../shared/models/Dishes";
import {sample} from "rxjs";
import {sample_foods, sample_tags} from "../../data";
import {Tag} from "../shared/models/tags";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Dishes[]{
    return sample_foods;
  }

  getAllDishesBySearch(searchTerm:string){
    return this.getAll().filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase())
      || dish.type.toLowerCase().includes(searchTerm.toLowerCase())
      || dish.category.toLowerCase().includes(searchTerm.toLowerCase())
      || dish.cuisine.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Dishes[]{
    return tag == "All" ?
      this.getAll() : this.getAll().filter(dish =>
        dish.cuisine.toLowerCase().includes(tag.toLowerCase())
        || dish.category.toLowerCase().includes(tag.toLowerCase())
        || dish.type.toLowerCase().includes(tag.toLowerCase()))
  }

  getDishById(dishId:string):Dishes{
    return this.getAll().find(dish => dish.id == dishId) ?? new Dishes();
  }
}

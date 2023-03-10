import { Injectable } from '@angular/core';
import {Dishes} from "../shared/models/Dishes";
import {map, Observable, sample} from "rxjs";
import {sample_foods, sample_tags} from "../../data";
import {Tag} from "../shared/models/tags";
import {HttpClient} from "@angular/common/http";
import {
  DISHES_BY_ID_URL,
  DISHES_BY_SEARCH_URL,
  DISHES_BY_TAG_URL,
  DISHES_TAGS_URL,
  DISHES_URL, NEW_DISH
} from "../shared/constants/urls";
import {Parser} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll() : Observable<Dishes[]>{
    return this.http.get<Dishes[]>(DISHES_URL);
  }

  getAllDishesBySearch(searchTerm:string){
    return this.http.get<Dishes[]>(DISHES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags() : Observable<Tag[]>{
    return this.http.get<Tag[]>(DISHES_TAGS_URL);
  }

  getAllFoodsByTag(tag:string) : Observable<Dishes[]>{
    return tag == "All" ?
      this.getAll() : this.http.get<Dishes[]>(DISHES_BY_TAG_URL + tag);
  }

  getDishById(dishId:string) : Observable<Dishes>{
    console.log("Url: " + DISHES_BY_ID_URL + dishId)
    return this.http.get<Dishes>(DISHES_BY_ID_URL + dishId);
  }

  addToCart(dish: Dishes){
    console.log("tsdfui", dish);
    console.log(NEW_DISH)
    // this.http.post(NEW_DISH, dish.id).pipe(map((res: any) => {return res}));
    return this.http.post<any>(NEW_DISH, dish.id).pipe(map((res: any) => {return res}));
  }
}

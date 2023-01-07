import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Dishes} from "../../../shared/models/Dishes";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm= '';
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe((params) =>{
    if(params.searchTerm) {
      this.searchTerm = params.searchTerm;
      this.dishes = foodService.getAllDishesBySearch(params.searchTerm);
    }
    else
      this.dishes = foodService.getAll();
    });
  }

  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/' + term);
    else
      this.router.navigateByUrl('');
  }

  dishes:Dishes[] = [];

}

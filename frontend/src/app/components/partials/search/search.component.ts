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
      foodService.getAllDishesBySearch(params.searchTerm).subscribe(search => this.dishes = search);
    }
    else
      foodService.getAll().subscribe(search => this.dishes = search);
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

import { Component } from '@angular/core';
import {FoodService} from "../../../services/food.service";
import {Tag} from "../../../shared/models/tags";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTags();
  }
}

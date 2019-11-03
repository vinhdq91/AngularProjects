import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe Pizza', 'A Description of Test Recipe', 
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/02/16/istock-938742222.jpg?w968 968w, https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/02/16/istock-938742222.jpg?w375 375w, https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/02/16/istock-938742222.jpg?w768 768w'),
    new Recipe('A Test Recipe Pho', 'A Description of Test Recipe', 
    'https://www.foodpanda.vn/wp-content/uploads/2019/02/16.An-pho-ha-noi-o-dau-ngon-nhat-10.jpg')
  ];
  @Output() recipeFinalItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeFinalItem.emit(recipe);
  }

}

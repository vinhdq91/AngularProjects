import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeFinalItem = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeFinalItem.emit(recipe);
  }

}

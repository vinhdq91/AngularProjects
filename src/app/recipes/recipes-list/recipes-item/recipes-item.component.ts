import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;  
  // @Output() recipeSelected =  new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  OnSelected(){
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}

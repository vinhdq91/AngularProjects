import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;  
  @Output() recipeSelected =  new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  OnSelected(){
    this.recipeSelected.emit();
  }

}

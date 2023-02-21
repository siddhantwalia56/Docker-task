import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
@Input() recipe:Recipe
constructor(private recipeService:RecipeService){}
OnSelect(){
this.recipeService.recipeSelected.emit(this.recipe)
}
}

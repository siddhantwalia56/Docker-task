import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
@Input() recipe:Recipe
@Output() recipeselected=new EventEmitter<void>();
OnSelect(){
this.recipeselected.emit();
}
}

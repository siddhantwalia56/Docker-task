import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients: Ingredient[]=[
  new Ingredient('Apple',5),
  new Ingredient('Tomato',4)
];

selectedIng(Ingredient:Ingredient){
  console.log(Ingredient)
this.ingredients.push(Ingredient);
}
}

import { EventEmitter,Injectable } from '@angular/core';
import {Recipe} from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected= new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe('Pan Cake', 'A sweet dish made of wheat flour',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    [
      new Ingredient('bread', 1),
      new Ingredient('Chocolate', 2)
    ]
    ),
    new Recipe('Salad', 'A healthy dish made of vegetables ',
    'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    [
      new Ingredient('carrot', 2),
      new Ingredient('potato', 1)
    ])
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

import { Component} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
recipe:Recipe;
id: number;
constructor(private recipeService: RecipeService,
            private router:Router,
            private route:ActivatedRoute) { }

ngOnInit() {
  this.route.params.subscribe(
    (params:Params)=>{
      this.id=+params['id']
      this.recipe=this.recipeService.getRecipe(this.id)
    }
  )
}

onAddToShoppingList() {
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}

OnEdit(){
  this.router.navigate(['edit'], {relativeTo: this.route})
}
}

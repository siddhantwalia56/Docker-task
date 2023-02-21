import { Component, Inject, Injectable,EventEmitter,Output,OnInit } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import {Recipe} from '../recipes.model';
import { RecipeService } from '../recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit{

  recipes:Recipe[];
  constructor(private recipeService:RecipeService){}
ngOnInit() {
  this.recipes=this.recipeService.getRecipes();
}

}

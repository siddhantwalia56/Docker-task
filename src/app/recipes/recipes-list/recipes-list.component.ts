import { Component, Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent {
recipes:Recipe[]=[
  new Recipe('Pan Cake', 'A sweet dish made of wheat flour','https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
  new Recipe('Salad', 'A healthy dish made of vegetables ','https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
];
}

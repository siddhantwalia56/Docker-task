import { Component,ElementRef,EventEmitter,OnDestroy,OnInit,Output,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', {static:false}) slform:NgForm
  subscription:Subscription
  editMode=false;
  editedItemindex:number;
  editeditem:Ingredient
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemindex=index;
        this.editMode=true;
        this.editeditem=this.slService.getingredient(index);
        this.slform.setValue({
          name: this.editeditem.name,
          amount: this.editeditem.amount})
      }
    )
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
  OnSubmit(form:NgForm) {
    const value=form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
    {this.slService.upadteIngredient(this.editedItemindex,newIngredient)}
    else
    this.slService.addIngredient(newIngredient);
    this.editMode=false;
    form.reset();
  }
  OnClear(){
    this.slform.reset();
  }

  OnDelete(){
    this.slService.deleteItem(this.editedItemindex)
    this.OnClear();
  }
}

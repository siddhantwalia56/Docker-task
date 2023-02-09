import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
// selectedingredients=new EventEmitter<amount:number>()
@Output() Ingselected=new EventEmitter<{Name:string,Amount:string}>();
OnAdd(name:HTMLInputElement,amount:HTMLInputElement){
  this.Ingselected.emit({
    Name:name.value,
    Amount:amount.value
  })
}
}

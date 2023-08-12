import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients: Ingredient[] = [];
//subscribe to ingredients in Shopping List Service.
constructor(private slSrevice: ShoppingListService){
  this.ingredients = this.slSrevice.getIngredients();
  this.slSrevice.ingredientAdded.subscribe(ingredient => {
    this.ingredients = this.slSrevice.getIngredients();
  })
}

}

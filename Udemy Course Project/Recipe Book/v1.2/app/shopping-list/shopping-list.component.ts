import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
//Variables
ingredients: Ingredient[] = [
  new Ingredient("Apples", 5),
  new Ingredient("Oranges", 8)
]

pushIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
}
}

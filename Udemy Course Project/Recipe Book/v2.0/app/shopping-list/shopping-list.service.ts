import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Oranges", 8)
  ];
  ingredientAdded = new EventEmitter<Ingredient[]>();
  //sends a copy to the Shopping List
  getIngredients(){
    return this.ingredients.slice();
  }
  //adds an ingredient from Shopping List
  addIngredient(name: string, quantity: number){
    this.ingredients.push(new Ingredient(name, quantity));
    this.ingredientAdded.emit(this.ingredients.slice());
  }
  constructor() { }
  //adds ingredients from recipe to shopping list
  addFromRecipe(ingredientList: Ingredient[]){
    this.ingredients.push(...ingredientList);
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}

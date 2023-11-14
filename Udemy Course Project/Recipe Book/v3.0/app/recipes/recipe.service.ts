import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Fried Shrimp", "Shrimp fried with tampura batter. Served with onion rings and dip sauce.", 
              "https://upload.wikimedia.org/wikipedia/commons/4/47/Deep-fried_foods_with_dipping_sauce.jpg", 
              [
                new Ingredient('shrimp', 10),
                new Ingredient('onion', 1),
                new Ingredient('chilli sauce', 1)
              ]),
    new Recipe("Chicken Steak", "Chicken breast steak with cherry tomatoes and basil leaves", 
              "https://foto.wuestenigel.com/wp-content/uploads/api/close-up-food-photo-of-grilled-chicken-breast-with-cherry-tomatoes-rosemary-and-basil-on-white-plate.jpeg", 
              [
                new Ingredient('chicken breast', 1),
                new Ingredient('cherry tomatoes', 5),
                new Ingredient('basil', 5)
              ])
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

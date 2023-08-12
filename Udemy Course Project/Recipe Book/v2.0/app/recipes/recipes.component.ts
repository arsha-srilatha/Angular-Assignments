import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe: Recipe  = {name:'', description: '', imagePath: '', ingredients: []};
  notSelected: boolean = true;
  //take values from Recipe Service.
  constructor(private recipeService: RecipeService){
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe)=> {
      this.selectedRecipe = recipe;
      this.notSelected = false;
    })
  }
 
}

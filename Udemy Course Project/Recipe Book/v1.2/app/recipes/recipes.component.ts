import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe  = {name:'', description: '', imagePath: ''};
  notSelected: boolean = true;
  //Function to send the selected recipe to recipe-detail component.
  sendRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
    this.notSelected = false;
  }
}

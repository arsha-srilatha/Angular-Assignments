import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeDisplayed: Recipe = {name:'', description:'', imagePath:'', ingredients: []};

  constructor(private recipeService: RecipeService){}
  //calls the function from Recipe Service
  addToSl(ingredients: Ingredient[]){
    this.recipeService.addToShoppingList(ingredients);
  }
}

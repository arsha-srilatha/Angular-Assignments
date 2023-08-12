import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() recipeItem: Recipe = {name: '', description: '', imagePath: '', ingredients: []};

constructor(private recipeService: RecipeService){

}
//Pass the recipe details to recipe detail component via service.
recipeClicked(recipe: Recipe){
 this.recipeService.selectedRecipe.emit(recipe);
}
}

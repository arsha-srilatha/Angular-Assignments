import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  //Variables
  recipes: Recipe[] = [
    new Recipe("Test Recipe1", "this is for test", "https://tse1.mm.bing.net/th?id=OIP.ceXBzTNqzcC9JCP88vWWvQAAAA&pid=Api&P=0&h=180"),
    new Recipe("Test Recipe2", "this is for test", "https://tse1.mm.bing.net/th?id=OIP.ceXBzTNqzcC9JCP88vWWvQAAAA&pid=Api&P=0&h=180")
  ]
}

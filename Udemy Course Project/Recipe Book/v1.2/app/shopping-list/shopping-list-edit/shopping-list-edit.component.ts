import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef | any;
  @ViewChild('quantityInput') quantityInput: ElementRef | any;
  @Output() ingredientAdded = new EventEmitter<Ingredient>;
 
  addIngredient(): void{
    const newIngredient: Ingredient = {name: this.nameInput.nativeElement.value, quantity: this.quantityInput.nativeElement.value};
    this.ingredientAdded.emit(newIngredient);
  }
}

import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef | any;
  @ViewChild('quantityInput') quantityInput: ElementRef | any;

  constructor(private slService: ShoppingListService){

  }
 
  addIngredient(){
    this.slService.addIngredient(this.nameInput.nativeElement.value, this.quantityInput.nativeElement.value);
    this.nameInput.nativeElement.value = '';
    this.quantityInput.nativeElement.value = 0;
  }
}

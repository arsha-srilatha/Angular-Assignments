import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  //Variables
  shoppingItems = [];//Array to store items
  
  //Function Calls
  ItemAdded(itemData : {name: string, quantity: string}){ //function to add item to array
    if(itemData.name !== "" && itemData.quantity !== "") {
      this.shoppingItems.push(
        {
          type: "item",
          name: itemData.name,
          quantity: itemData.quantity
        }
      )
    }
  }

  GroceryAdded(itemData : {name: string, quantity: string}){ //function to add grocery to array
    if(itemData.name !== "" && itemData.quantity !== "") {
      this.shoppingItems.push(
        {
          type: "grocery",
          name: itemData.name,
          quantity: itemData.quantity
        }
      )
    }
  }

  onDeleteClicked(index: number){//function to delete the shopping item
    this.shoppingItems.splice(index,1);
  }
}

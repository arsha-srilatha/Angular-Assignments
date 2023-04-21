import { Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Variables
  shoppingItems = [ {type:"grocery", name:"Grapes", quantity: "2 bunches"} ];//Array to store items
  
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




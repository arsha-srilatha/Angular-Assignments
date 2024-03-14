import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  //Variables
  itemname : string = "";
  //Eventemitters
  @Output('addItem') itemAdded = new EventEmitter<{name: string, quantity: string}>;
  @Output('addGrocery') groceryAdded = new EventEmitter<{name: string, quantity: string}>;
  //ViewChild usage
  @ViewChild('quantityValue') quantityValue: ElementRef; 

  //Function calls to emit the events of adding a shopping item
  onAddItem(quantityData: HTMLInputElement) //uses localmarker passed as a function parameter
  {
    this.itemAdded.emit({name:this.itemname, quantity: quantityData.value });
    this.itemname = "";
    this.quantityValue.nativeElement.value = "";
  }
  onAddGrocery(){ //uses ViewChild to access the element properties
    this.groceryAdded.emit({name:this.itemname, quantity:this.quantityValue.nativeElement.value });
    this.itemname = "";
    this.quantityValue.nativeElement.value = "";
  }
  onReset(){//to reset the input fields
    this.itemname = "";
    this.quantityValue.nativeElement.value = "";
  }
}

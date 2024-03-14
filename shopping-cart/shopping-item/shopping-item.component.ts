import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
   //Custom properties
   @Input('shoppingElement') element: { type: string, name: string, quantity: string };
   //Using Contentchild to access the element projected via ng-content.
   @ContentChild('listNumber') listIndex: ElementRef;
 
   sample: string;
 
   ngAfterContentInit(){
     this.sample = this.listIndex.nativeElement.innerText;
     this.sample = this.sample.slice(8);
   }
}

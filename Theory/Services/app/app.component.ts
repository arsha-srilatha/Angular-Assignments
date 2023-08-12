import { Component } from '@angular/core';
import { ItemDataService } from './item-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemDataService] //dependency injection. This instance will be available to AppComponent and it's child components but not services.
})
export class AppComponent {
  userEntry: string = '';
  selection: string = '';
  showData: boolean = false;
  counter : number = 0;

  constructor(private dataControl: ItemDataService){}

  addData(){
    this.counter = this.counter+1;
    this.dataControl.addItem(this.selection, this.userEntry);
    this.dataControl.stopAdd(this.counter);
    this.selection = '';
    this.userEntry = '';
  }

  
}

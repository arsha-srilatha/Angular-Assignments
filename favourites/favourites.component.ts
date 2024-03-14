import { Component } from '@angular/core';
import { ItemDataService } from './item-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
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

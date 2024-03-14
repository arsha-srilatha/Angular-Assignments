import { EventEmitter, Injectable } from '@angular/core';
import { ItemStyleService } from './item-style.service';

//@Injectable() //enables other services to be injected to this service.
@Injectable({
    providedIn: 'root'
  })
export class ItemDataService {

  constructor(private styling: ItemStyleService) { }
  items: {category:string, item: string, color: string}[] = [];
  limit = new EventEmitter<number>;

  addItem(selection:string, favorite: string){
    this.items.push({category: selection,item: favorite, color: this.styling.addColor(selection)});  
  }
  stopAdd(count: number){
    this.limit.emit(count);//aids cross-component communication.
  }

  
}
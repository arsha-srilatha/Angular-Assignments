import { Component } from '@angular/core';
import { ItemDataService } from '../item-data.service';
import { ItemStyleService } from '../item-style.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent {
    favorites: {category:string, item: string, color: string}[] = [];
    stop: any = 0;
    //logger = new LoggingService(); --> The service instance is directly created. Not recommended.
  
    constructor(private logger: LoggingService, private itemData: ItemDataService, private itemStyle: ItemStyleService){// creating an instance using constructor. Normally used.
      //this.logger = inject(LogginService); - creating an instance using inject function
      this.favorites = this.itemData.items;
      this.stop = this.itemData.limit.subscribe(value=> {
        console.log(value);
        if(value >= 6){
          alert("Maximum limit reached.")
          this.itemData.items.pop();
      }})//subscribed to the event in ItemData service instance.
    }
}

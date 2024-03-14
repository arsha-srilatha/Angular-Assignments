import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class LoggingService{
    onAdded(category: string, item: string){
        console.log('Item Added as s'+ category+':'+item);
    }
}
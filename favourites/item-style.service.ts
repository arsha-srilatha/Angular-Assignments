import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //--> instead of using providing instance in providers[] in AppModule 
})
export class ItemStyleService {
  constructor() { }
  addColor(selection: string){
    if(selection == 'flower'){
      return 'lightpink';
    }
    else if(selection == 'fruit'){
      return 'orange';
    }
    else if(selection == 'color'){
      return 'lightblue';
    }
    else {
      return 'lightgreen';
    }
  }
}
import { Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//variables
num : number = 0;
count: any;
odd: number[] = []; //array to store odd numbers
even: number[] = []; //array to store even numbers

//Function calls
gameControl(value: {controlValue: boolean}){ //function to start or stop the game
  if(value.controlValue === true){
    //console.log("control"+ value.controlValue);
   this.count = setInterval(() => { // adds odd numbers to the array
      if(this.num%2 == 0){
        this.num = this.num+1;
        this.odd.push(this.num)
        //console.log(this.odd);
      }
      else {                        //adds even numbers to the array
        this.num = this.num+1;
        this.even.push(this.num)
        //console.log(this.even);
      }
      //console.log(this.num);
    }, 1000);
  }
  else {
    clearInterval(this.count);
  }
}
gameReset(value: {resetValue: boolean}){ //function to empty the arrays
  //console.log("reset"+ value.resetValue);
  if(value.resetValue === true){
    this.odd = [];
    this.even = [];
    this.num = 0;
  }
}
}




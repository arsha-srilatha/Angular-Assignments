import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNo: number[] = [];
  evenNo: number[] = [];
  counter: any;
  count: number = 0;

  onStart(){
    this.counter = setInterval(() => {
      this.count=this.count+1;
      if(this.count%2==0){
        this.evenNo.push(this.count)
      }
      else {
        this.oddNo.push(this.count)
      }
    }
    , 1000)
  }

  onPause(){
    clearInterval(this.counter);
  }

  onStop() {
    clearInterval(this.counter);
    this.count=0;
    this.evenNo = [];
    this.oddNo = [];
  }
}

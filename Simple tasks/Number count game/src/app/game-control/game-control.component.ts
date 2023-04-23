import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
//Variables
@Output() gameStarted = new EventEmitter<{controlValue: boolean}>;
@Output() reset = new EventEmitter<{resetValue: boolean}>;
resetEnabled: boolean = false;

//Function calls
onStart(){ //to start count
  this.gameStarted.emit({controlValue: true});
  this.reset.emit({resetValue: false});
  this.resetEnabled = false;
}

onStop(){ //to stop count
  this.gameStarted.emit({controlValue: false});
  this.resetEnabled = true;
}

onReset(){ //to reset count
  this.reset.emit({resetValue: true});
  this.resetEnabled = false;
}
}

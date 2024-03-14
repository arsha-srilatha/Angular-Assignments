import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  
  @Output() gameStart = new EventEmitter;
  @Output() gameStop = new EventEmitter;
  @Output() gamePause = new EventEmitter

  playControl: boolean = true;
  pauseControl: boolean = false;
  stopControl: boolean = false;
  
  startGame(){
   this.gameStart.emit();
   this.playControl = false;
   this.pauseControl = true;
   this.stopControl = true;
  }

  stopGame(){
    this.gameStop.emit();
    this.playControl = true;
    this.pauseControl = false;
    this.stopControl = false;
  }

  pauseGame(){
    this.gamePause.emit();
    this.playControl = true;
    this.pauseControl = false;
    this.stopControl = false;
  }
}
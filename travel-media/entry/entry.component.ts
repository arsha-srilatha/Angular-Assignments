import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  //Variables
  isMovie: boolean = false;
  label1: string = "Movie"
  label2: string = "Artist";

  //Custom event binding without alias.
  @Output() songAdded = new EventEmitter<{name: string, artist: string}>;
  //Custom event binding with alias.
  @Output('addMovie') movieAdded = new EventEmitter<{name: string, language: string}>;
  //ViewChild - avoid usage of 'any'. Added for demostration purpose.
  @ViewChild('nameInputData') nameInputData: any;

  //Function to switch the form between Song and Movie.
  changeEntry(detailValue: HTMLInputElement): void{
    if(this.isMovie === false){
      this.isMovie = true;
      this.label1 = 'Song';
      this.label2 = 'Language';
    }
    else {
      this.label1 = 'Movie';
      this.isMovie = false;
      this.label2 = 'Artist';
    }
    //Below usage not recommended. Only added here for demonstration purpose.
    this.nameInputData.nativeElement.value = '';
    detailValue.value = '';
  }

  addItem(detailValue: HTMLInputElement){
    if(!this.isMovie) {
      this.songAdded.emit({
        name: this.nameInputData.nativeElement.value,
        artist: detailValue.value
      });
    }
    else {
      this.movieAdded.emit({
        name: this.nameInputData.nativeElement.value,
        language: detailValue.value
      });
    }
    //Below usage not recommended. Only added here for demonstration purpose.
    this.nameInputData.nativeElement.value = '';
    detailValue.value = '';
  }
}

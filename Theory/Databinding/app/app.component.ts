import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Array to store songs
  songs: {name:string, artist:string}[] = [
    {name:'Pied Piper', artist: 'BTS'}
  ];
  //Array to store movies
  movies: {name:string, language:string}[] = [
    {name:'Dark Knight', language: 'English'}
  ];

  //function to store data in the respective arrays
  onAddSong(songData: {name: string, artist: string}){
      this.songs.push({
        name: songData.name,
        artist: songData.artist
      })
      
    }

  onAddMovie(movieData: {name: string, language: string}){
    this.movies.push({
      name: movieData.name,
      language: movieData.language
    })
  }
}

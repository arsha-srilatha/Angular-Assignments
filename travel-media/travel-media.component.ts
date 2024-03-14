import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-media',
  templateUrl: './travel-media.component.html',
  styleUrls: ['./travel-media.component.css']
})
export class TravelMediaComponent {
   //Array to store songs
   songs: {name:string, artist:string}[] = [];
  //Array to store movies
  movies: {name:string, language:string}[] = [];

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

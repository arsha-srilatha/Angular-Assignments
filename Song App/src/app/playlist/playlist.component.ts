import { Component } from '@angular/core';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  songs : Song[] = [
    new Song("Like Crazy", "Jimin", 3),
    new Song("Hope World", "J-Hope", 4)
  ]; //array of songs in the playlist
}

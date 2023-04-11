import { Component } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  //List of artists as an array
  artists: Artist[] = [
    new Artist("Jimin", "Member of BTS : South Korea", 
    "https://tse1.mm.bing.net/th?id=OIP.Sz9eXDaoJx5JvlnvvLg7cAAAAA&pid=Api&P=0"),
    new Artist("J-Hope", "Member of BTS : South Korea", 
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/J-Hope_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_05_(cropped).jpg")
  ];
}

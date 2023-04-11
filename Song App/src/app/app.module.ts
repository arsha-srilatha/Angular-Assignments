import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';
import { TheArtistComponent } from './artists/artist-list/the-artist/the-artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistEditComponent } from './playlist/playlist-edit/playlist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistsComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    TheArtistComponent,
    PlaylistComponent,
    PlaylistEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

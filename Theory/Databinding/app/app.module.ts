import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { SongComponent } from './song/song.component';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SongComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

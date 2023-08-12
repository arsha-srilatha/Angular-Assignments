import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteItemComponent } from './favorite-item/favorite-item.component';
import { ItemStyleService } from './item-style.service';




@NgModule({
  declarations: [
    AppComponent,
    FavoriteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemStyleService],//Creating a service instance here can be used by all components and also services.
  bootstrap: [AppComponent]
})
export class AppModule { }

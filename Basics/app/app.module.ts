import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//This has to be imported manually.
import { ManualComponent } from './manual/manual.component';
//This is imported automatically by Angular CLI.
import { ByCliComponent } from './by-cli/by-cli.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    ByCliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

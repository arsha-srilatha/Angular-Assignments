import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangeStyleDirective } from './custom-collection/change-style.directive';
import { CustomStyleDirective } from './custom-collection/custom-style.directive';
import { DynamicStyleDirective } from './custom-collection/dynamic-style.directive';
import { BindingStyleDirective } from './custom-collection/binding-style.directive';
import { CustomStructureDirective } from './custom-collection/custom-structure.directive';




@NgModule({
  declarations: [
    AppComponent,
    ChangeStyleDirective,
    CustomStyleDirective,
    DynamicStyleDirective,
    BindingStyleDirective,
    CustomStructureDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

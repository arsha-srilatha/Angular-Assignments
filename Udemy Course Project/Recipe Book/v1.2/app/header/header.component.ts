import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureSelect = new EventEmitter<string>();
  //Function to emit selected feature from header component.
  selectFeature(feature: string){
    this.featureSelect.emit(feature);
  }
}

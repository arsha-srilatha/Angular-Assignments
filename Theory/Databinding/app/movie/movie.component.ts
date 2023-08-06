import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MovieComponent {
  //Custom property binding using @Input without an alias.
  @Input() movie: {name: string, language: string} = {name:'', language:''};
}

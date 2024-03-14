import { Component } from '@angular/core';

@Component({
  selector: 'app-data-transform',
  templateUrl: './data-transform.component.html',
  styleUrls: ['./data-transform.component.css'],
})
export class DataTransformComponent {
  userName: string;
  dataSubmitted: boolean;
  isUppercase: boolean;
  isLowercase: boolean;
  isSliced: boolean;
  start: number = -1;
  end: number = -1;
  isReversed: boolean;
  isSorted: boolean;
}

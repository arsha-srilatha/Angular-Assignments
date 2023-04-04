import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0;
  isValid: boolean = false;
  checked: boolean = false;
  checkValidity(value: number){
    this.checked = true;
    if (value>=0 && value<=100)
      this.isValid = true;
    else this.isValid = false;
  }
}

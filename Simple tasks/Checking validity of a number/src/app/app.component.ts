import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Variables
  value: number = 0;
  isValid: boolean = false;
  checked: boolean = false;

  //Function to check validity of the user input.
  checkValidity(value: number){
    this.checked = true;
    if (value>=1 && value<=100)
      this.isValid = true;
    else this.isValid = false;
  }

  //Function to reset the input field
  reset(){
    this.value = 0;
    this.checked = false;
  }
}

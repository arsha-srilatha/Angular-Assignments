import { Component } from '@angular/core';

@Component({
  selector: 'app-number-validity',
  templateUrl: './number-validity.component.html',
  styleUrls: ['./number-validity.component.css']
})
export class NumberValidityComponent {
  //Variables
  value: number = 0;
  isValid: boolean = false;
  checked: boolean = false;
  values: number[] = []; //array to store the values provided by user in a single session
  showValues: boolean = false;

  //Function to check validity of the user input.
  checkValidity(value: number){
    this.checked = true;
    if (value>=1 && value<=100){
      this.isValid = true;
      this.values.push(value);
      console.log(this.values);
    } 
    else this.isValid = false;
  }

  //Function to reset the input field
  reset(){
    this.value = 0;
    this.values = [];
    this.checked = false;
  }

  /*Function to display the list of valid values entered by user.
  Also acts as a function to go back to page that accepts user values */
  showValuesArray(){
    this.showValues = !this.showValues
    if (this.showValues) 
      return 'Enter values';
    else return 'Show values';
  }
}

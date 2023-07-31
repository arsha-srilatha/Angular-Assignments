import { Component } from '@angular/core';

//This component is added by Angular Cli
@Component({
  selector: 'app-by-cli',
  templateUrl: './by-cli.component.html', 
  //template: `<p>I am created by Angular CLI using 'ng g c by-cli' command.</p>` - would produce same result.
  styleUrls: ['./by-cli.component.css']
})
//Here, styles are provided via an external file.
export class ByCliComponent {
  sample1: boolean = false;
  sample2: number[] = [];

  sample3() {
    this.sample2.push(Math.round(Math.random()*100));
  }
}

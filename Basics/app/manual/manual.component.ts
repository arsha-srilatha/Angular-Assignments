import { Component } from "@angular/core";

//This component is created manually.
@Component({
    selector: 'app-manual',
    //selector: .app-manual - provided in html as class.
    //selector: [app-manual] - provided as an attribute.
    templateUrl: './manual.component.html',
    styles: [`
    p.desc{
        color: green;
    }
    `] 
})
//Here styles are provided directly.

export class ManualComponent{
sample1: string = 'variable';
  sample2: boolean = false;
  sample5: string = 'Two-way binding';
  
  sample3() : string {
    return "function call";
  }

  sample4(event: Event){
    console.log(event);
  }
}
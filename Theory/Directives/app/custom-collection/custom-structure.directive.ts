import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructure]'
})
export class CustomStructureDirective {
  @Input() set appCustomStructure(condition: boolean){
    if(!condition){
      this.vREf.createEmbeddedView(this.template);
    }
    else {
      this.vREf.clear();
    }
  }
  constructor(private template: TemplateRef<any>, private vREf: ViewContainerRef ) { }

}

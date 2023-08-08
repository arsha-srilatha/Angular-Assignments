import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicStyle]'
})
export class DynamicStyleDirective implements OnInit {

  constructor(private selectedElement: ElementRef, private render: Renderer2) { }
  ngOnInit(): void {
    this.render.setStyle(this.selectedElement.nativeElement, 'background-color', 'lightblue');
  }
  //This approach brings more interactive styling using @HostListener that responds to events.
  @HostListener('mouseenter') mouseover(){
    this.render.setStyle(this.selectedElement.nativeElement, 'background-color', 'salmon');
  }
  @HostListener('mouseleave') mouseleave(){
    this.render.setStyle(this.selectedElement.nativeElement, 'background-color', 'lightblue');
  }

}

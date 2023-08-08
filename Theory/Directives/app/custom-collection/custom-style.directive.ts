import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective implements OnInit{

  constructor(private selectedElement: ElementRef, private render: Renderer2) { }
  ngOnInit(): void {
    //This approach accesses elements via Renderer2
    this.render.setStyle(this.selectedElement.nativeElement, 'background-color', 'salmon');
  }
}

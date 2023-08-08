import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBindingStyle]'
})
export class BindingStyleDirective implements OnInit{
  //This approach provides an alternative to using Renderer.
  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightpink';
  //The below approach enables property binding with the directive.
  @Input() defaultColor: string = 'green'; //Can be set in HTML using property name.
  @Input('appBindingStyle') highlightColor: string = 'red'; //Can be set in HTML using attribute name itself.
  @HostBinding('style.color') color: string = 'green';
  constructor() { }
  ngOnInit(): void {
    
  }
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'lightgreen';
    this.color = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'lightpink';
    this.color = this.defaultColor;
  }
}

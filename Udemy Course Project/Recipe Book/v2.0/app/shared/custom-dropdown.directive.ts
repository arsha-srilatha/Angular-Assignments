import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDropdown]'
})
export class CustomDropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  constructor() { }
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}

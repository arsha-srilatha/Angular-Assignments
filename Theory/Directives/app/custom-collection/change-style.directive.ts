import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[changeStyle]'
})
export class ChangeStyleDirective implements OnInit{
    constructor(private selectedElement: ElementRef){

    }

    ngOnInit(): void {
        //This approach directly accesses the element.
        this.selectedElement.nativeElement.style.color = "blue";
        this.selectedElement.nativeElement.style.fontSize = "20px";
    }
}
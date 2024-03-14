import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  //Custom property binding using @Input with an alias.
  @Input('mySong') song: {name: string, artist: string} = {name:'', artist: ''};

  //@ViewChild() and @ContentChild() for demonstrating lifecycle hooks.
  @ViewChild('songName', {static:true}) songName: ElementRef | undefined;
  @ContentChild('songArtist', {static:true}) songArtist: ElementRef | undefined;
  //LifeCycle Hooks
  constructor(){
    console.log("Constructor in song component called.");
  }
  ngOnInit(){
    console.log("ngOnit is called when a component is initialized.")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called once the component is created and whenever any change occurs to @Input properties.");
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck is called whenever any change occurs in the component.")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called after content in ng-content is intialized.")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called whenever projected content is checked.")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called when a component's view and it's child views are initialized.")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is called when the view and child views have been checked.")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy is called when a component is removed from DOM.")
  }
}

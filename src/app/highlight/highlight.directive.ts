import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef){
  }

  ngOnInit() {
    /*this.elementRef.nativeElement.style.backgroundColor = 'green';*/
  }

  @HostListener('mouseenter') mouseHover(eventData: Event){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }

}

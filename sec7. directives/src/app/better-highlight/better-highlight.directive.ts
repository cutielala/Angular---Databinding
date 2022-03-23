import { 
  Directive,
  ElementRef, 
  HostBinding, 
  HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') defaultColor: string = 'lightblue';
  @Input() highlightColor: string = 'orange';
  @HostBinding('style.backgroundColor') backgroundColor!: string; 

  constructor(private elRed:ElementRef, private renderer:Renderer2) { }
  
  ngOnInit() {
   // this.renderer.setStyle(this.elRed.nativeElement, 'backgroundColor','lightblue');
    this.backgroundColor = this.defaultColor; 
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRed.nativeElement, 'backgroundColor','orange');
    // this.backgroundColor = 'orange';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRed.nativeElement, 'backgroundColor','lightblue');
    //this.backgroundColor = 'lightblue';
    this.backgroundColor = this.defaultColor;
  }
}

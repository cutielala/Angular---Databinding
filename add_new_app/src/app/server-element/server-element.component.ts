import { 
  Component, 
  OnInit , 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input('name') name: string;
 // @ViewChild('serverContentInput') serverContentInput: ElementRef
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content of header:' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph:' + this.paragraph.nativeElement.textContent);

  }
  
  ngDoCheck(){
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text paragraph:' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text view:' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

}

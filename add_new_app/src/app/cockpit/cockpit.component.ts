import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  // serverElements = [];
 // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput:HTMLInputElement) {
    console.log (this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: serverNameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value

    });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      //serverContent: this.newServerContent
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}

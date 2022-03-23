import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'even_odd_game';
  oddNum : number[] = [];
  evenNum : number[] = [];
 
  onIntervalFired(FireNum: number){
    console.log(FireNum)
   // this.numberElements.push(data
    if(FireNum % 2 === 0){
      this.evenNum.push(FireNum);
    }
    else{
      this.oddNum.push(FireNum);
    }
    
  }
}

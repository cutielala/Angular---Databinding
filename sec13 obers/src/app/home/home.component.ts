import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { Observer } from 'rxjs/Observer';
import { map,filter } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  private firstObsSubscription? : Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(
    //     count => {console.log(count)
    //   });
     const customIntervalObservable = Observable.create ( (observer: Observer<number>) => {
      // setInterval( handler() =>{} , handler:1000) 
      let count = 0;
      setInterval( () => {
          observer.next(count);
          if(count === 5){
            observer.complete();
          }
          if( count > 3 ){
            observer.error( new Error('count is greater than 3'));
          }
          count ++;
       }, 1000 );
     });
    //  customIntervalObservable.pipe( (data:string) => {
    //    return "round : "+ (data +1);
    //  }

    //  ) ;   
    this.firstObsSubscription = customIntervalObservable.pipe(
      filter( (data: any) =>{
          return data > 0;
      }), map ((data:number) => {
      return "round : "+ (data +1);
    })).   subscribe((data:number) =>{ 
           console.log(data);
      }, (error: any) => {
          console.log(error);
          alert(error);
      }, () =>{ 
          console.log('it is complete');
      });
    
  }

  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe();
  }

}

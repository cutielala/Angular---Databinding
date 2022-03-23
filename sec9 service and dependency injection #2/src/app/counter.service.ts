export class CounterService{
    active = 0;
    inactive = 0; 
    incrementActive(){
        this.active ++;
        console.log(" incrementActive: " + this.active);
    }
    incrementInactive(){
        this.inactive ++;
        console.log(" incrementActive: " + this.inactive);
    }
}
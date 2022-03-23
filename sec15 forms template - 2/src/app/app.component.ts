import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm = NgForm;
  email ='';
  //subscriptions =['Basic', 'Advanced', 'Pro'];
  defaultSubscript = 'Advanced';
  password='';

  onSubmitted(){
    console.log(this.signupForm);
  }

}

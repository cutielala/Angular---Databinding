import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm?:NgForm; 
  defaultQuestion = 'pet';
  answer ='';
  genders = ['male','female'];
  submitted = false;
  user = {
    username :'',
    email:'',
    secret:'',
    answer:'',
    gender:''

  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm?.form.patchValue({
      userData:{
        username : suggestedName
      }
    })
  }
  
  // onSubmit(form: HTMLFormElement){
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm?.value.userData.username;
    this.user.email = this.signupForm?.value.userData.email;
    this.user.secret = this.signupForm?.value.secret;
    this.user.answer = this.signupForm?.value.answer;
    this.user.gender = this.signupForm?.value.gender;

    this.signupForm?.reset();
  }
}

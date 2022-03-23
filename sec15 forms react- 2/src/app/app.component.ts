import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm!: FormGroup;
  statusList =['Stable', 'Critical', 'Finished'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'project' : new FormControl(null,
        [ Validators.required, 
          this.forbittenProject],
          this.asyncInvalidProjectName as any),
      'email' : new FormControl(null),
      'status' : new FormControl('Stable'),
    });

    this.signupForm.statusChanges
      .subscribe(
      theStatus =>{ console.log(theStatus)}
    )
  }
  onSubmit(){
    console.log(this.signupForm);
  }
  
  forbittenProject(control:FormControl):{[s:string]:boolean}{
    const forbittenProjectName ='Test';
    if(control.value === forbittenProjectName){
      return {'forbittenProjectName': true};
    }

    return null as any;

  }

   asyncInvalidProjectName(control: FormControl): Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}> 

   {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);
    })
    return promise as any;
  }
  get admins() {
    return this.signupForm.controls["project"] as FormArray;
  }

}

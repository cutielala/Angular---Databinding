import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
 // currentUser$ : Observable<User>;

  constructor(public accountService: AccountService , private router:Router, 
    private toastr:ToastrService) { }

  ngOnInit(): void {
    //this.currentUser$ = this.accountService.currentUser$;
    if(this.accountService.currentUser$)//persist login test by viola
             console.log("is valid");
    else
    console.log("not valid");
  }
  login(){
    this.accountService.login(this.model).subscribe( response =>{
        //console.log(response);
        this.router.navigateByUrl('/members')
    },error=>{
       console.log(error);
     //  this.toastr.error(error.error);
    })
 
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
  

  

}
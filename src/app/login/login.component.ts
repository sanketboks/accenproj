import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { RegestrationService } from '../regestration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emp=new Employee();
  bolist:any=[]
  @Output() event= new EventEmitter<any>()


  msg=""

  constructor(private service:RegestrationService, private router:Router) { }

  ngOnInit(): void {
    
  }
  loginUser(){
    this.service.valuser(this.emp).subscribe(
    data=>{console.log("Response got")
          this.bolist=data;

          this.router.navigate(['/success'])  
   },
    error=>{console.log(" Exception occured")
     this.msg="username or password is wrong"
  }
    )

  }
  getregister(){
    console.log("registration");
    this.router.navigate(['/add'])

  }


}

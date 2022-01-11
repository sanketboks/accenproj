import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { Route, Router } from '@angular/router';
import { RegestrationService } from '../regestration.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emp=new Employee();
  msg='';

  constructor(private service:RegestrationService, private router:Router) { }

  ngOnInit(): void {
  }
  addUser(){
    this.service.aduser(this.emp).subscribe(
     data=> {
       console.log("response recived");
       this.router.navigate(['/login'])

      },
      error=>{
        console.log("problem in registration component");
        this.msg=error.error.message;
        
        console.log(this.msg)
      }
    )


  }

}

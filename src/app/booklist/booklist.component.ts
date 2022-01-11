import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { RegestrationService } from '../regestration.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private service:RegestrationService, private router:Router) {
    this.service.getbok().subscribe(
      data=>{console.log("Response got")
            this.bo=data;
            console.log(this.bo)
  
             
     },
      error=>{console.log(" Exception occured")
       this.msg="NO data found"
    }
    )
   } 
  bok=new Books();
  msg="";
  bo: Books[] = [];
  blist:any=[];
  receivedat($event: any){
    this.blist=$event

  }
 

 

  ngOnInit(): void {
  }

}

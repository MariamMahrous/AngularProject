import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent implements OnInit {

  constructor( private listservice:ListService,private routers:Router) { }
    user : any
    delt : any 
  ngOnInit(): void {
    this.lisit();
    
  }
  lisit(){
     this.listservice.getuser().subscribe((data:any)=>{
        this.user = data;
     })
    }
    delete( id : number ) {
      this.listservice.deleteuser(id).subscribe( );
   
    }   

  }   

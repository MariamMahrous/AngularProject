import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
  private isAuthenticated = false

 
  private tokenTimer: any
  private isAdmin = false
  private userInfo: any
  constructor(private  listseervice:ListService,
     ) { }

  ngOnInit(): void {
  }
  lisit( id : number ){
    this.listseervice.userinfo( id ).subscribe((data:any)=>{
       this.userInfo = data;
    })
   }
   }  

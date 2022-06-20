import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 categorylist:any;
  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.CategoryService.getcategory().subscribe(
      (res)=>this.categorylist=res,
      error=>{console.log(error)}),
      (()=>console.log("complete"))
      
    
  }


}

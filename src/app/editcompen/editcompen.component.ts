import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-editcompen',
    templateUrl: './editcompen.component.html',
    styleUrls: ['./editcompen.component.css']
  
})
export class EditcompenComponent implements OnInit {
  reactiveFrom: FormGroup
  id: any;


  constructor( private listservice:ListService, private url :ActivatedRoute,private routes:Router) {
    
    

   this.reactiveFrom = new FormGroup({
        
          
          Email1 : new FormControl("",[Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$ ")]),
          Name: new FormControl (""),
          User_Name : new FormControl("" ,[Validators.required, Validators.pattern( "[^' ']+")]),
          password :  new FormControl(" ", [Validators.required] ),
          conform_password   : new FormControl(" ", [Validators.required] )

       
      })
     
    }
    handleForm(){
      console.log(this.reactiveFrom)
    }
  

  ngOnInit(): void {
  //    this .id = this.url.snapshot.params['id'];
  //    this.listservice.users(this.id).subscribe(data=>{
  //     this.reactiveFrom.patchValue(data);
  // })

}
  
 onsubmit ( id :number , postdata :object): void{
    ///   مفروض اضيف داله ادخال اليوزر   فيها
  this.listservice.usersupdate(id,postdata).subscribe((data: any) => {
    this.routes.navigate(['/lisitcomponent'])
  })

  
 }

} 
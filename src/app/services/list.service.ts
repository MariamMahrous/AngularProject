import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http :HttpClient) { }
   
  getuser (  ){
    return this.http.get('http:// lcalhost:5000/users');
  }
   deleteuser ( id : number){
     return this .http.delete(' http:// lcalhost:5000/Users/'+ id);
   }
  usersupdate ( id :any,postdata:object)
   {
     return this .http.put('http:// lcalhost:5000/users/'+id,postdata)
   }
    userinfo ( id :any)
   {       
     return this .http.put('http:// lcalhost:5000/users/',id)
   }
  
}


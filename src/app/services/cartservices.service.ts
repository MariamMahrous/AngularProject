import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {

  constructor(private http :HttpClient) {
     
   }
   addOrderToCart( id : any){
    // product //
    return this .http.put('http:// lcalhost:5000/product/',id)
   }
}

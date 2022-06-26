import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderservicesService {

  constructor(private http :HttpClient) { }

getorder( )
{
  return this .http.get('http:// lcalhost:5000/product/order') 
}
 getid(id :any){
  return this .http.get('http:// lcalhost:5000/product/order' + id)
}

}

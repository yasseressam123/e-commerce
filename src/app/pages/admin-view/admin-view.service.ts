import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {

  authApi = environment.publicUrl;

  constructor(private http: HttpClient) { }

  // get all products
  getProducts(){
    return this.http.get(this.authApi + `products`)
  }

  //delete product 
  deleteProduct(id:number){
    return this.http.delete(this.authApi + `products/${id}`)
  }
}

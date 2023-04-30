import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserViewService {
  authApi = environment.publicUrl;

  constructor(private http: HttpClient) { }

  // get all products
  getProducts(){
    return this.http.get(this.authApi + `products`)
  }

  getCategories(){
    return this.http.get(this.authApi + `products/categories`)
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authApi = environment.publicUrl;
  users:any[] = [
    {Username: 'user' , Password: 'user'},
    {Username: 'admin' , Password: 'admin'}
  ]

  constructor(private http : HttpClient, private router:Router) { }

  signIn(userData:any){
    let validate = this.users.find(user=>{
      if(user.Username === userData.userName){
        if(user.Password === userData.password){
          switch(userData.userName){
            case 'admin': 
              localStorage.setItem("userType", 'admin');
              break;
            case 'user':
              localStorage.setItem("userType", 'user');
              break;
            default:
              break;
            }
          return true;
        }
      }
      return false;
    })
    return validate;
  }

  getRole() {
    let roleAs = localStorage.getItem('userType');
    return roleAs;
  }

  public isAuthenticated(): boolean {
    const userType = localStorage.getItem("userType");
    if(userType){
      return true;
    }
    return false;
  }

}

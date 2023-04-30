import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router : Router , private authService :AuthService) { }

  canActivate(next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any):boolean{
    if(this.authService.isAuthenticated()){
      const userRole = this.authService.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        this.router.navigate(['/pages']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
  
}

import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{

  constructor(private router:Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      if(!this.authService.isAuthenticated()) {
        this.router.navigate(['/auth']);
      } else {
        let role = this.authService.getRole();
        console.log(role)
        if(role === 'admin'){
          this.router.navigate(['pages/admin']);
        }else if(role === 'user'){
          this.router.navigate(['pages/user']);
        }
      }
    }, 1000);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../service/app.layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public layoutService: LayoutService, private router:Router) { }

  handleLogout(){
    localStorage.removeItem("token");
    this.router.navigate(['/auth']);
  }
}

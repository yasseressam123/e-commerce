import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isLoading:boolean = false;
  // Declare Sign In Form
  signInForm = new FormGroup({
    'userName'        : new FormControl("",Validators.required),
    'password'     : new FormControl("", Validators.required),
   });

  constructor(
    private router : Router,
    private messageService: MessageService,
    private authService: AuthService){}

  ngOnInit(): void {}

  signIn(){
    let userName = this.signInForm.value['userName']
    this.isLoading=true;
    let validation = this.authService.signIn(this.signInForm.value);
    this.isLoading=false;
    if(validation){
        let role = this.authService.getRole();
        console.log(role)
        if(role === 'admin'){
          this.router.navigate(['pages/admin']);
        }else if(role === 'user'){
          this.router.navigate(['pages/user']);
        }
    }else{
      this.messageService.add({severity:'error', summary:'Error', detail:'Username / Password entered is not valid.'});
    }
  }

}

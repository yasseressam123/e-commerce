import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './user-view.component';
import { AuthGuardService as AuthGuard } from 'src/app/auth/services/auth-guard.service';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';


const routes: Routes = [
  {path: '', component: UserViewComponent, canActivate: [AuthGuard] ,data: {role: 'user'}, children: [
    {path: '', redirectTo: 'dashboard' , pathMatch:"full"},
    {path: 'dashboard', component:UserDasboardComponent , pathMatch:"full"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'src/app/auth/services/auth-guard.service';
import { AdminViewComponent } from './admin-view.component';


const routes: Routes = [
  {path: '', component: AdminViewComponent, canActivate: [AuthGuard] ,data: {role: 'admin'}, children: [
    // {path: '', redirectTo: 'dashboard' , pathMatch:"full"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }

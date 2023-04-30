import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../auth/services/auth-guard.service';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {path: '', component: PagesComponent, canActivate: [AuthGuard], children: [
    {path: 'admin', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule)},
    {path: 'user', loadChildren: () => import('./user-view/user-view.module').then(m => m.UserViewModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

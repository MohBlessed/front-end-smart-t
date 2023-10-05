import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminManagementComponent } from './dashboard/admin-management/admin-management.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ManagerManagementComponent } from './dashboard/manager-management/manager-management.component';
import { QuotemanagementComponent } from './dashboard/quotemanagement/quotemanagement.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { UsermanagementComponent } from './dashboard/usermanagement/usermanagement.component';
import { AuthGuard } from './_services/auth.guard';
import { ProfileComponent } from './dashboard/profile/profile.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: ContentComponent },
      { path: 'usermanagement', component: UsermanagementComponent },
      { path: 'quotemanagement', component: QuotemanagementComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'charts', component: ChartComponent },
      { path: 'manager', component: ManagerManagementComponent },
      { path: 'admin', component: AdminManagementComponent },
      {path:'userList',component:UserListComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

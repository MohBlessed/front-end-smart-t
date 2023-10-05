import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { QuotemanagementComponent } from './quotemanagement/quotemanagement.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ChartComponent } from './chart/chart.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FrameComponent } from './frame/frame.component'
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BackAccountFormatPipe } from './pipes/back-account-format.pipe';
import { EmployeeManagementComponent } from './user-list/employee-management/employee-management.component';
import { ManagerManagementComponent } from './manager-management/manager-management.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { httpInterceptorProviders } from '../_helpers/http.interceptor';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LeftSidenavComponent,
    RightSidenavComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    HeaderComponent,
    QuotemanagementComponent,
    UsermanagementComponent,
    ChartComponent,
    ProfileComponent,
    FrameComponent,
    CapitalizePipe,
    BackAccountFormatPipe,
    EmployeeManagementComponent,
    ManagerManagementComponent,
    AdminManagementComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    DashboardComponent,
    FooterComponent,
    HeaderComponent
],
providers: [httpInterceptorProviders],
})
export class DashboardModule { }

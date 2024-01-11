import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "login", component: LoginComponent},
    {path: "users", component: UsersComponent},
    {path: "leave", component: LeaveComponent},
    {path: "analytics", component: AnalyticsComponent},
    {path: "attendance", component: AttendanceComponent}
];

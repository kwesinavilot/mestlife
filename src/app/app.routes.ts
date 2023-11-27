import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "login", component: LoginComponent},
    {path: "users", component: UsersComponent},
];

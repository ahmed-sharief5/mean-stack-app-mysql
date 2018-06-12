import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from 'app/add-employees/add-employees.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

const employeesRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employees/new', component: AddEmployeesComponent},
    { path: 'employees/:id', component: AddEmployeesComponent}
  ];
  
  
  export const usersRouting = RouterModule.forChild(employeesRoutes);
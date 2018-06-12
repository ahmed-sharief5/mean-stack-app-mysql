import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule, Directive} from '@angular/core';

import { EmployeesComponent } from './employees.component';
import { AddEmployeesComponent } from 'app/add-employees/add-employees.component';

const employeesRoutes: Routes = [
    { path: 'employees', component: EmployeesComponent, pathMatch: 'full' },
    { path: 'employees/new', component: AddEmployeesComponent},
    { path: 'employees/:id', component: AddEmployeesComponent}
  ];


  export const usersRouting = RouterModule.forChild(employeesRoutes);
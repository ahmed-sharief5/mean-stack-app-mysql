import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EmployeesComponent } from '../employees/employees.component';
import { AddEmployeesComponent } from 'app/add-employees/add-employees.component';

const employeesRoutes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employees/new', component: AddEmployeesComponent},
    { path: 'employees/:id', component: AddEmployeesComponent}
  ];
  
  
  export const usersRouting = RouterModule.forChild(employeesRoutes);
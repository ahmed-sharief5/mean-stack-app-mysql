import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../app.component';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';
import { EmployeeService } from '../employee.service';


@NgModule({
  declarations: [
    AddEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  exports: [AddEmployeesComponent]
})

export class AddEmployeeModule { }

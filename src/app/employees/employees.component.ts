import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {Observable} from "rxjs/Observable";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgModule, Directive} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppModule } from 'app/app.module';
import {RouterModule,Router,Routes} from "@angular/router";

import { FormsModule } from '@angular/forms';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ EmployeesComponent,AddEmployeesComponent ],
  bootstrap: [ EmployeesComponent ]
})

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
  
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  editEmployees: Employee[];
  employee: Employee;
  name: string;
  age: string;
  email: string;
 

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router) { 

      this.getEmployees()
    }

  //// get list of employees
  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(
            resultArray => this.employees = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  /// delete employee 
  deleteEmployee(deleteEmployeeId: number) {
    if (confirm("Are you sure you want to delete ?")) {
      this.employeeService.deleteEmployee(deleteEmployeeId).subscribe(
         data => {
           
         },
         error => {
           console.error("Error deleting employee!");
           return Observable.throw(error);
         }
      );
      this.getEmployees();
    }
  }
  
 
  ngOnInit() {

   this.getEmployees()
   

  }

}

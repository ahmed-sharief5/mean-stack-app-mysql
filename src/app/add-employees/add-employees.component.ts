import { Component, OnInit, group, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {Observable} from "rxjs/Observable";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgModule, Directive} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppModule } from 'app/app.module';
import {RouterModule,Router,Routes,ActivatedRoute} from "@angular/router";


import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from '../employees/employees.component';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css'],
  providers: [EmployeeService]
})

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AddEmployeesComponent ],
  bootstrap: [ AddEmployeesComponent ],
  
})

export class AddEmployeesComponent{

  employee: Employee;
  id: number;
  name: string;
  age: any;
  email: string;
  title: string;
  employeeForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private __employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    
   }

  //// adding new employee
  createEmployee() {
    const newEmployee ={
      name: this.name,
      age: this.age,
      email: this.email
    }

      this.__employeeService.createEmployee(newEmployee).subscribe(
        data => {
          
        },
        error => {
          console.error("Error adding employee!");
          return Observable.throw(error);
        }
      );
    
    this.router.navigate(['/employees'])
  }


  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.title = id ? 'Edit Employee' : 'New Employee';

    });
  }

}

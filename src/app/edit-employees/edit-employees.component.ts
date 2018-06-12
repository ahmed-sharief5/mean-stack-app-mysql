import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {Observable} from "rxjs/Observable";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {RouterModule,Router,Routes,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css'],
  providers: [EmployeeService]
})
export class EditEmployeesComponent implements OnInit {

  editEmployees: Employee[];
  employee: Employee;
  id: any;
  editname: any;
  editage: any;
  editemail: any;
  title: string;
  employeeForm: FormGroup;

  constructor(
    private __employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  /// update employee data
  updateEmployee(empId) {
    
    const editEmployee ={
      name: this.editname,
      age: this.editage,
      email: this.editemail
    }
      this.__employeeService.updateEmployee(editEmployee,empId).subscribe(
        data => {
          //console.log(data)
        },
        error => {
          console.error("Error updating employee!");
          return Observable.throw(error);
        }
      );
      this.router.navigate(['/employees'])
  }
  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      //console.log(id)
      this.title = id ? 'Edit Employee' : 'New Employee';

      if (id){
        this.__employeeService.getEmployeeById(id)
        .subscribe(
          employees =>{ this.editEmployees = employees  
          //console.log(employees[0])
          this.editname = employees[0].name
          this.editage = employees[0].age
          this.editemail = employees[0].email
          this.editEmployees.push(this.employee = employees[0])
          data => {}
        })
        
        this.id = id
       
      }
     
    });
  }
  }

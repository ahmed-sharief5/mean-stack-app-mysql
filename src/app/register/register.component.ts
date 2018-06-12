import { Component, OnInit, group, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {Observable} from "rxjs/Observable";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgModule, Directive} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppModule } from '../app.module';
import {RouterModule,Router,Routes,ActivatedRoute} from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [EmployeeService]

})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  fname: string;
  lname: string;
  data: any;
  failure: any;

  constructor(
    formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  registerUser() {
    const registerUserData ={
      email: this.email,
      password: this.password,
      fname: this.fname,
      lname: this.lname
    }

      this.employeeService.registerUser(registerUserData).subscribe(
        data => {
          if (data && data.token) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.router.navigate(['/employees'])
        }
          else{
            this.failure = data.message;
            //this.router.navigate(['/login'])
          }
          
        },
        error => {
          console.error("Error login user!");
          return Observable.throw(error);
        }
      );
    
    
  }
  ngOnInit() {
    let userDetails = localStorage.getItem('currentUser')

    if(userDetails){
      let userToken = JSON.parse(userDetails).token;
      if(userToken){
        this.router.navigate(['/employees'])
      }
    }
    else{
      this.router.navigate(['/register'])
    }
  }

}

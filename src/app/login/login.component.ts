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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmployeeService]
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  data: any;
  failure: any;

  constructor(
    formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,

  ) {   }

  loginUser() {
    const loginUserData ={
      email: this.email,
      password: this.password,
    }

      this.employeeService.loginUser(loginUserData).subscribe(
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
      this.router.navigate(['/login'])
    }
    
  }

}

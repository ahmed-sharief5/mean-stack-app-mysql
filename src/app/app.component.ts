import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {Observable} from "rxjs/Observable";
import { NgModule, Directive} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppModule } from './app.module';
import {RouterModule, Router, Routes,ActivatedRoute,CanActivate} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]

})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    
    this.employeeService.authUser().subscribe(
      data => {
        //console.log(JSON.parse(data).auth)
        if (JSON.parse(data).auth != false) {
          this.router.navigate(['/employees'])
      }
        else{
          localStorage.removeItem('currentUser');
          this.router.navigate(['/home'])
          
        }
        
      },
      error => {
        console.error("Error login user!");
        return Observable.throw(error);
      }
    );
  }
}


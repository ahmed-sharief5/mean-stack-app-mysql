import { Component, OnInit } from '@angular/core';
import { AppModule } from 'app/app.module';
import { ModuleWithProviders } from '@angular/core';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {RouterModule, Router, Routes,ActivatedRoute,CanActivate} from "@angular/router";

import { EmployeesComponent } from '../employees/employees.component';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [EmployeeService]
})
export class NavBarComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

   //// logout
   logout(): void {
    this.employeeService.logout()
        .subscribe(
            resultArray => localStorage.removeItem('currentUser'),
            error => console.log("Error :: " + error)
        )

        localStorage.removeItem('currentUser')
        this.router.navigate(['/login'])
        
  }



  ngOnInit() {
  }

}

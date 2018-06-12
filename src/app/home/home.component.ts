import { Component, OnInit } from '@angular/core';
import {RouterModule,Router,Routes,ActivatedRoute} from "@angular/router";
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgModule, Directive} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    let userDetails = localStorage.getItem('currentUser')

    if(userDetails){
      let userToken = JSON.parse(userDetails).token;
      if(userToken){
        this.router.navigate(['/employees'])
      }
    }
    else{
      this.router.navigate(['/home'])
    }
   
  }

}

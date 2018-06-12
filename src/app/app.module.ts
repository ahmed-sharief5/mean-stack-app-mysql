import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Router,Routes} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddEmployeeModule } from './add-employees/add-employee.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component'


const employeesRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'employees/new', component: AddEmployeesComponent},
  { path: 'employees/:id', component: EditEmployeesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EditEmployeesComponent,
    AddEmployeesComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavBarLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(
      employeesRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

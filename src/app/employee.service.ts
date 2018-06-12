import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Employee} from './employee';
import 'rxjs/add/operator/map'; 
import {Observable} from "rxjs/Observable";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Resolve } from '@angular/router/src/interfaces';


let userToken
let userDetails = localStorage.getItem('currentUser')
    if(userDetails){
      userToken = JSON.parse(userDetails).token;
    
    }
    else{
      userToken = 'sample';
    }


let headers = new Headers({ 'Content-Type': 'application/json','x-access-token': userToken});
let options = new RequestOptions({ headers: headers });


@Injectable()
export class EmployeeService {

  // api url to get the list of employees
  private _getURL = "http://localhost:3000";
  
  
  constructor(private http: Http) { }

  /// authenticate user
  authUser(){
    
    let headers = new Headers({ 'Content-Type': 'application/json','x-access-token': userToken});
      let options = new RequestOptions({ headers: headers });
      
        return this.http
          .get(this._getURL+'/me/',options)
            .map(res => {
              return res['_body'];
          })
    
  
}

  /// login new user
  loginUser(newEmployee) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(newEmployee);
    
      return this.http
        .post(this._getURL+'/login', body, options )
          .map(res => res.json()
        );
  }

   /// add new user
   registerUser(newEmployee) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(newEmployee);
    
      return this.http
        .post(this._getURL+'/register', body, options )
          .map(res => res.json()
        );
  }

  
  /// get list of employees
  getEmployees(): Observable<Employee[]> {

    return this.http
        .get(this._getURL+'/',options)
          .map(res => {
            console.log(res.json())
              return <Employee[]>res.json().result;
          })
        
}

/// add new employee
  createEmployee(newEmployee) {

    let body = JSON.stringify(newEmployee);
    
      return this.http
        .post(this._getURL+'/add', body, options )
          .map(res => res.json()
        );
  }

  /// get employee by id
  getEmployeeById(empId: number): Observable<Employee[]> {

    
      return this.http
        .get(this._getURL+'/edit/'+empId,options)
          .map(res => {
            return <Employee[]>res.json();
        })
  
}

/// edit and update employee details
  updateEmployee(updateEmployee:any,id): Observable<Employee[]> {
    
    let body = JSON.stringify(updateEmployee);
    
        return this.http
        .put(this._getURL+'/edit/' +id, body, options )
          .map((res: Response) => res.json()
        );
  }

  /// delete employee
  deleteEmployee(id: number) {
    return this.http
        .delete(this._getURL+'/delete/'+id,options)
  }
  
  /// logout
  logout() {
    return this.http
        .get(this._getURL+'/logout/',options).map(res => {
      })
    }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}


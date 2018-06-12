import { Component, OnInit } from '@angular/core';
import { AppModule } from 'app/app.module';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent implements OnInit {

  constructor() { }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  
  ngOnInit() {
  }

}

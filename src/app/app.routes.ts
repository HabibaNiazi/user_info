import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EditdataComponent } from './editdata/editdata.component';
import { AdddataComponent } from './adddata/adddata.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adddata",
    component:AdddataComponent
  },
  {
    path:"edit/:id",
    component:EditdataComponent

  }
];

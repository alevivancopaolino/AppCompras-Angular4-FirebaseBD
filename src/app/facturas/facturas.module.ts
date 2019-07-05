import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [AddfraComponent],
  providers:[]
})
export class FacturasModule { }

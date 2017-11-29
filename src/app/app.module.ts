import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.router'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MaterialUIModule} from './material-ui.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

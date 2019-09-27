import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

// Appolo
import { GraphQLModule } from './graphql.module';
import { Task2Component } from './task2/task2.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Task3Component } from './task3/task3.component';
import { ExpressService } from './shared/express.service';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [ExpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }

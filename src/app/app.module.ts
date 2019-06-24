import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteComponentComponent } from './route-component/route-component.component';

import { RouterModule } from '@angular/router';
import Constants from './constants';


@NgModule({
  declarations: [
     AppComponent,
     RouteComponentComponent,
  ],
  imports: [
     BrowserModule,
     RouterModule.forRoot([
       { path: '', pathMatch: 'full', redirectTo: Constants.defaultUrl },
       { path: Constants.defaultUrl, component: RouteComponentComponent },
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

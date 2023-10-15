import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrinciplesComponent } from './principles/principles.component';
import {FormsModule} from "@angular/forms";
import { ChildComponent } from './child/child.component';
import { ListComponent } from './list/list.component';
import {PeopleService} from "./people.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PrinciplesComponent,
    ChildComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

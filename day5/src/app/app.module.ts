import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component'

/* import {AdminModule} from './admin/admin.module';
import { UserModule } from './user/user.module'; */


@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HooksChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   /*  AdminModule,
    UserModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
  
}

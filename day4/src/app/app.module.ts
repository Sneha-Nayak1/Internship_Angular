import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import {FormsModule} from '@angular/forms'; */
import {ReactiveFormsModule} from '@angular/forms';
import { RedColorDirective } from './red-color.directive';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { PageNotComponent } from './page-not/page-not.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    RedColorDirective,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    PageNotComponent,
    ChildComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* FormsModule, */
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

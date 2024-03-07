import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { PageNotComponent } from './page-not/page-not.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    component:Comp1Component,
    path:''
  },
  {
    component:Comp2Component,
    path:'c2',
   children:[
    {
      component:ChildComponent,
      path:'child'
    }
   ]
  },
  {
    component:Comp3Component,
    /* path:'c3/:id/:name' */
    path:'c3'
  },
  {
    component:PageNotComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { BookComponent } from './book/book.component';



const routes: Routes = [

  // { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component:PrivacyComponent},
  { path: 'terms', component: TermsComponent },
  { path: 'book', component: BookComponent },
  //  { path: '', component: AppComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

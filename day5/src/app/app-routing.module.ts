import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"admin", loadChildren:()=>import('./admin/admin.module').
then(val=>val.AdminModule)},

{path:"user", loadChildren:()=>import('./user/user.module').
then(val=>val.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

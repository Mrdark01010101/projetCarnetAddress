import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';


const routes: Routes = [
  {path:'',redirectTo:'address_list',pathMatch:'full'},
  

  {path: '**',component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

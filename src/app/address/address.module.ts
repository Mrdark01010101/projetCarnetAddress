import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAddressComponent } from './list-address/list-address.component';
import { DetailAddressComponent } from './detail-address/detail-address.component';
import { BordeCardDirective } from '../borde-card.directive';

import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';


const pokemonroutes: Routes = [
  { path: 'edite/address/:id', component: EditAddressComponent },
  { path: 'address/add', component: AddAddressComponent },
  { path: 'address/:id', component: DetailAddressComponent },
  { path: 'address_list', component: ListAddressComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },


];
@NgModule({


  declarations: [
    ListAddressComponent,
    DetailAddressComponent,
    BordeCardDirective,

    AddressFormComponent,
    EditAddressComponent,
    AddAddressComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)

  ]
})
export class AddressModule { }

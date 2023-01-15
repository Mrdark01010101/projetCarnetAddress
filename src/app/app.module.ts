import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';

import { FormsModule } from '@angular/forms';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressModule } from './address/address.module';





@NgModule({
  declarations: [
    AppComponent,
    PageNoFoundComponent,
    LoginComponent,
    RegisterComponent,
  
    DashboardComponent,
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    
    ReactiveFormsModule,
    AddressModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    
   
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

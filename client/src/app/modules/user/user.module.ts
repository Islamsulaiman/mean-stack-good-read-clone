import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthorComponent } from './components/author/author.component';


@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AuthorComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }

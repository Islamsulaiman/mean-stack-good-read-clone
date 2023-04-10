import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    ReactiveFormsModule
  ]
})
export class UserModule { }

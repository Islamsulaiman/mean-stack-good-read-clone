import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    UserComponent,
    AuthService,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
  ]
})
export class UserModule { }

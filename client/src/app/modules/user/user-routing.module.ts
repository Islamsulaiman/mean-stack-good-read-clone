import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TryalComponent } from './components/tryal/tryal.component';

const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: TryalComponent },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

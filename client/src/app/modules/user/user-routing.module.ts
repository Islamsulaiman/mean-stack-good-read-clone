import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './components/authors/authors.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'authors',  component: AuthorsComponent},
  { path: 'books',  component: SingleBookComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

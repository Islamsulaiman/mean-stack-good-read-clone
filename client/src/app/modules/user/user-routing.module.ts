import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './components/authors/authors.component';
<<<<<<< HEAD
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
=======
import { SingleBookComponent } from './components/single-book/single-book.component';
import { BooksComponent } from './components/books/books.component';
>>>>>>> 91532d391d18d60703cd37189647ea6c5568d5c2

const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'authors',  component: AuthorsComponent},
<<<<<<< HEAD
  { path: 'author/:id',  component: AuthorDetailsComponent},
=======
  { path: 'books/book',  component: SingleBookComponent},
  { path: 'books',  component: BooksComponent},
  
>>>>>>> 91532d391d18d60703cd37189647ea6c5568d5c2

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

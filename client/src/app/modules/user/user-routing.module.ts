import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { BooksComponent } from './components/books/books.component';
import { ShelveComponent } from './components/shelve/shelve.component';

const routes: Routes = [

  { path: '', component: UserComponent, children: [
    { path: 'register', component: RegistrationComponent,},
    { path: 'login', component: LoginComponent},
    { path: 'authors',  component: AuthorsComponent},
    { path: 'author/:id',  component: AuthorDetailsComponent},
    { path: 'books/book',  component: SingleBookComponent},
    { path: 'books',  component: BooksComponent},
    { path: 'shelve',  component: ShelveComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

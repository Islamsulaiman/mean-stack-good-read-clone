import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorComponent } from './components/author/author.component';
<<<<<<< HEAD
import { AuthorDetailsComponent } from './components/author-details/author-details.component';

=======
import { SingleBookComponent } from './components/single-book/single-book.component';
import { BooksComponent } from './components/books/books.component';
>>>>>>> 91532d391d18d60703cd37189647ea6c5568d5c2

@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AuthorComponent,
<<<<<<< HEAD
    AuthorDetailsComponent,
    AuthorsComponent
=======
    SingleBookComponent,
    BooksComponent
>>>>>>> 91532d391d18d60703cd37189647ea6c5568d5c2
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

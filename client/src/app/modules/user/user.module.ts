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
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShelveComponent } from './components/shelve/shelve.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { CategoryDetailsComponent } from './components/categories/category-details/category-details.component';
import { ShelveSidebarComponent } from './components/shelve-sidebar/shelve-sidebar.component';
import { ShelveMainComponent } from './components/shelve-main/shelve-main.component';

@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AuthorComponent,
    AuthorDetailsComponent,
    AuthorsComponent,
    SingleBookComponent,
    BooksComponent,
    NavbarComponent,
    ShelveComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    ShelveSidebarComponent,
    ShelveMainComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

})
export class UserModule { }

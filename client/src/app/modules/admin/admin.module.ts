import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminAuthorsComponent } from './components/admin-authors/admin-authors.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProfileComponent,
    AdminLoginComponent,
    AdminBooksComponent,
    AdminCategoriesComponent,
    AdminAuthorsComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }

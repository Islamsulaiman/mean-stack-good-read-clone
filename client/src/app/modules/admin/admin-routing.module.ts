import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminAuthorsComponent } from './components/admin-authors/admin-authors.component';

const routes: Routes = [

  { path: 'login', component: AdminLoginComponent },
  { path: 'profile', component: AdminProfileComponent },
  { path: 'books', component: AdminBooksComponent },
  { path: 'categories', component: AdminCategoriesComponent },
  { path: 'authors', component: AdminAuthorsComponent },
  { path: '**', component: AdminLoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

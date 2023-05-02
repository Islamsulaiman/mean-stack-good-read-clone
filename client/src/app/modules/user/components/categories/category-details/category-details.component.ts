import { Component } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BooksService } from '../../../services/books.service';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  bookId: any
  id:any ;
  category:any ;
  isLogged = false
  shelve_status = "Add to shelve"
  isClicked = false;
  
  constructor(private categoryServ:CategoriesService, private _activateRoute:ActivatedRoute,
     private _router:Router,
     private _UserService: UsersService,
     private _AuthService: AuthService,
     private _BooksService:BooksService){
    if(this._AuthService.currentUser.getValue()) this.isLogged = true

    this.id = this._activateRoute.snapshot.params['id']
    this.fetchData()
  }

  fetchData(){
    this.categoryServ.getCategoryById(this.id).subscribe(
      data => {

        this.category = data.category
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          this._router.navigate(['/not-found'])
        }
      })


    }
  addBookToUserShelve(bookId:any){
    this._BooksService.addBookToUserShelve(this._AuthService.currentUserId, bookId, {observe: 'response'}).subscribe(
      res=>{
        console.log(res)
        this.shelve_status = "Added"
        this.isClicked = true;
    },
     error =>{
      if (error instanceof HttpErrorResponse) {
        console.log(error);
        
      }
      
     }
    )
  }
}
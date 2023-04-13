import { Component } from '@angular/core';
import { AuthorsComponent } from '../authors/authors.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  id:any ;
  author:any ;
  constructor(private authorsServ:AuthorsService, private _activateRoute:ActivatedRoute, private _router:Router){
    this.id = this._activateRoute.snapshot.params['id']
    this.fetchData()
  }

  fetchData(){
    this.authorsServ.getAuthorById(this.id).subscribe(
      data => {

        this.author = data
        console.log(this.author)
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          this._router.navigate(['/not-found'])
        }
      }
      )

  }
}
import { Component } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  id:any ;
  category:any ;
  constructor(private categoryServ:CategoriesService, private _activateRoute:ActivatedRoute, private _router:Router){
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
      }
      )

  }
}
import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent {
  skip = 0
  limit = 12

  categories:Category[] = []
  error  ="";
  categoryId = "";
  constructor(private _CategoriesService: CategoriesService){

    //assume that every page have only 10 books, th 1st page from 0 to 10
    this._CategoriesService.getCategories(this.skip, this.limit, {observe: 'response'}).subscribe((res:any)=>{

      console.log(res.body.book)

      if(res.status === 200){
        this.categories = res.body.book
        console.log(this.categories);

      }else{
        this.error = res
      }

    })
  }
getCurrentId(id:any){
 if(!id) return

 this.categoryId = id
}


}

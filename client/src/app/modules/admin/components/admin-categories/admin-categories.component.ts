import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent {
  limit = 8
  categories:Category[] = []
  error  ="";
  currentPage = 1
  totalPages = 1
  doneReq = false
  constructor(private _CategoriesService: CategoriesService){
    this.loadAuthors();
  }




  loadAuthors() {
    this._CategoriesService.getCategories(this.currentPage, this.limit, {observe: 'response'}).subscribe((data:any)=>{
      this.categories = data.body.category.categories;
      this.totalPages = data.body.category.totalPages;
    });
  }






  getCurrentId(id:any){
    if(!id) return
   
    this._CategoriesService.id = id
   }
   
   formData = new FormData();
   file: File | undefined;
   

onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewCategory(myForm: NgForm){

  const { name } = myForm.value;

  this.formData.append('name', name);
    this._CategoriesService.data = myForm.value;
  this._CategoriesService.addCategory().subscribe(
    (response) => {
      this.doneReq =true
    },
    (error) => {
    }
  );
}


UpdateCategories(myFormU:NgForm){
  const { name } = myFormU.value;

  this.formData.append('name',name);

  this._CategoriesService.updateCategory(myFormU.value).subscribe((res)=>{
    this.doneReq =true

  },
  (err)=>{

  })
}

deleteCategory() {
  this._CategoriesService.deleteCategory().subscribe(
    (response) => {
        this.doneReq =true
    },
    (error) => {
    }
  );
}

// Pagianate 
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.loadAuthors();
  }
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadAuthors();
  }
}


}

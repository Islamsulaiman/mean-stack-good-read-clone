import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit{
  limit = 8
  categories:Category[] = []
  error  ="";
  currentPage = 1
  totalPages = 1
  name = "";
  currentID: any;
  doneReq = false
  constructor(private _CategoriesService: CategoriesService){
  }


  ngOnInit(){
    
    this.loadCategories();

  }

  loadCategories() {
    this._CategoriesService.getCategories(this.currentPage, this.limit, {observe: 'response'}).subscribe((data:any)=>{
      this.categories = data.body.category.categories;
      this.totalPages = data.body.category.totalPages;
    });
  }


  getCurrentId(id:any, name:string){
    if(!id) return

    this.currentID = id;
    this.name = name;
   }

   formData = new FormData();
   file: File | undefined;


onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewCategory(myForm: NgForm){

  const { name } = myForm.value;

  this.formData.set('name', name);
  this._CategoriesService.data = myForm.value;
  this._CategoriesService.addCategory().subscribe(
    (response) => {
      alert("Category is added")
      myForm.reset();
      this.loadCategories();
      this.doneReq =true
    },
    (error) => {
    }
  );
}


updateCategories(myFormU:NgForm){
  const { name } = myFormU.value;

  this.formData.set('name',name);

  this._CategoriesService.updateCategory(this.currentID, myFormU.value).subscribe((res)=>{
    alert("Category is updated")
    this.loadCategories();


  },
  (err)=>{

  })
}

deleteCategory() {
  this._CategoriesService.deleteCategory(this.currentID).subscribe(
    (response) => {
      this.categories = this.categories.filter((book:any) => book._id !== this.currentID);
      alert("Category is deleted")
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
    this.loadCategories();
  }
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadCategories();
  }
}


}

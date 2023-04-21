import {Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild} from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { Author } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';

// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit{
  

  skip = 0
  limit = 12
  books: Book[] = [];
  error  ="";
  doneReq = false
  currentPage = 1
  totalPages = 1
  categories:Category | any;
  authors:Author | any ;
  selectedValue:any;
  currentID: any;
  constructor(private _BooksService: BooksService,
    private _router:Router ,
    private _CategoriesService:CategoriesService,
    private _AuthorsService:AuthorsService,){}

  changeCategory(e:any){
    this.selectedValue = e.target.value;

  }

  loadBooks() {
    this._BooksService.getBooks(this.skip, this.limit, {observe: 'response', params: {cacheBust: new Date().getTime()}}).subscribe((res)=>{
      if(res.status === 200){
        this.books = res.body.book.books;
        console.log(this.books);
        this._BooksService.booksCount = this.books.length;
        console.log();
        
      }else{
        this.error = res;
      }
    });
  }


  ngOnInit(){
    this.loadBooks()
    this._CategoriesService.getCategories(0, 0, {observe: 'response'}).subscribe((data:any)=>{
      this.categories = data.body.category.categories;
      this.totalPages = data.body.category.totalPages;
      this._BooksService.categoriesCount = this.categories.length


    });

    this._AuthorsService.getAuthors(0, 0, {observe: 'response'}).subscribe((data:any)=>{
      console.log(data.body.authors);
      this.authors = data.body.authors;
      this.totalPages = data.body.totalPages;
      this._BooksService.authorsCount = this.authors.length

    });

}


getCurrentId(id:any){
 if(!id) return

 this.currentID = id;
}


formData = new FormData();
file: File | undefined;


onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewBook(myForm: NgForm){

  const { title, description, category, author } = myForm.value;

  this.formData.set('title', title);
  this.formData.set('description', description);
  this.formData.set('category', category);
  this.formData.set('author', author);
  if(this.file) this.formData.set('image', this.file);
  console.log(myForm.value)
  this._BooksService.addBook(this.formData).subscribe(
    (response) => {
      alert("Book is added")
      myForm.reset();
      this.loadBooks();
      this.doneReq =true
    },
    (error) => {
    }
  );
}
UpdateBook(myFormU:NgForm){
  const { title , description } = myFormU.value;
  this.formData.set('title',title);
  this.formData.set('description',description);
  if(this.file) this.formData.set('image',this.file);
  this._BooksService.updateBook(this.currentID, this.formData).subscribe((res)=>{
    alert("Book is updated")
    // this.loadBooks();

  },
  (err)=>{

  })
}

deleteBook() {
  this._BooksService.deleteBook(this.currentID).subscribe(
    (response) => {
      this.books = this.books.filter((book:any) => book._id !== this.currentID);
        alert("Book is deleted")
        this.doneReq =true
    },
    (error) => {
    }
  );
    
}

loadCategories() {
  this._CategoriesService.getCategories(this.currentPage, this.limit, {observe: 'response'}).subscribe((data:any)=>{
    this.categories = data.body.category.categories;
    this.totalPages = data.body.category.totalPages;
    console.log(this.categories);

  });
}


}











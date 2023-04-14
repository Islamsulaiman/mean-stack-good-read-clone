import {Component, OnInit} from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import { NgForm } from '@angular/forms';
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent {
  skip = 0
  limit = 12

  books:Book[] = []
  error  ="";
  bookId = "";
  constructor(private _BooksService: BooksService){

    //assume that every page have only 10 books, th 1st page from 0 to 10
    this._BooksService.getBooks(this.skip, this.limit, {observe: 'response'}).subscribe((res)=>{

      console.log(res.body.book)

      if(res.status === 200){
        this.books = res.body.book
        console.log(this.books);

      }else{
        this.error = res
      }

    })

    
  }
getCurrentId(id:any){
 if(!id) return

 this.bookId = id
}


formData = new FormData();
file: File | undefined;


onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewBook(myForm: NgForm){

  const { title, description } = myForm.value;
  
  this.formData.append('title', title);
  this.formData.append('description', description);
  if(this.file) this.formData.append('image', this.file);

  this._BooksService.addBook(this.formData).subscribe(
    (response) => {
      console.log('Response:', response);
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
}











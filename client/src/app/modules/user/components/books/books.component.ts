import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  skip = 0
  limit = 8
  currentPage = 1
  totalPages = 0

  books:any[] = []
  error  ="";

  loadCategories() {
    this._BooksService.getAllBooks(this.skip, this.limit, {observe: 'response'}).subscribe((res)=>{
      
      console.log(res)
      if(res.status === 200){
        this.books = res.body.book.books
        this.totalPages = res.body.book.noOfPages
      }else{
        this.error = res
      }
    })
  }

  constructor(private _BooksService: BooksService){
    this.loadCategories();
  }



  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.skip = this.skip - this.limit;
      console.log("prev")
      this.loadCategories();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      console.log("nexrt")
      this.currentPage++;
      this.skip = this.skip + this.limit
      this.loadCategories();
    }
  }






}

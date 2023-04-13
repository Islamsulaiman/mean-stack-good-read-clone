import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  skip = 0
  limit = 12

  books:any[] = []
  error  ="";

  constructor(private _BooksService: BooksService){

    //assume that every page have only 10 books, th 1st page from 0 to 10
    this._BooksService.getAllBooks(this.skip, this.limit, {observe: 'response'}).subscribe((res)=>{

      if(res.status === 200){
        this.books = res.body.book
      }else{
        this.error = res
      }

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from 'src/app/modules/admin/interfaces/book';
import { Author } from 'src/app/modules/admin/interfaces/author';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[] = [];
  authors:Author[] = [];

  constructor(private _bookService: BooksService , private _authorService: AuthorsService){
    
  }

  ngOnInit(){
    this._bookService.getPopularBooks({observe: 'response'}).subscribe((res)=>{
        
      this.books = res.body.book
    })
    this._authorService.getPopularAuthors({observe: 'response'}).subscribe((res)=>{
        
      this.authors = res.body.author;
    })
}


}

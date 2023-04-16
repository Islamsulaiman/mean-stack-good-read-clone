import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from 'src/app/modules/admin/interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any;
  constructor(private _bookService: BooksService){
    
  }

  ngOnInit(){
    this._bookService.getPopularBooks({observe: 'response'}).subscribe((res)=>{
        
      this.books = res.body.book
    })
}


}

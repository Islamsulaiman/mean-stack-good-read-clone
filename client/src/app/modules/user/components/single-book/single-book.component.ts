import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit{

  bookId  = ""
  book:any ;
  error = ""
  bookReviews: any[]  = []
  skip = 0;
  limit = 5;

  constructor(private _ActivatedRoute:ActivatedRoute, private _BooksService:BooksService){
    this.bookId = this._ActivatedRoute.snapshot.params['bookId']

    this._BooksService.getSingleBook(this.bookId,{observe: 'response'}).subscribe((res)=>{
      console.log(res)

      if(res.status === 200){
        this.book = res.body.book
      }else{
        this.error = res
      }
    })

    this._BooksService.getBookReviews(this.bookId, this.skip, this.limit,{observe: 'response'}).subscribe((res)=>{
      console.log(res)
      if(res.status === 200){
        this.bookReviews = res.body.book
        console.log(this.bookReviews)
      }else{
        this.error = res
      }

    })

  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}

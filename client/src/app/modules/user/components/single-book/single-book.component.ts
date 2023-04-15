import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
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
  addReviewForm!:FormGroup
  userId = "643b11f461dee46ad0581e9b"

  constructor(private _ActivatedRoute:ActivatedRoute,
     private _BooksService:BooksService,
     private _FormBuilder:FormBuilder,
     private _AuthService:AuthService ){
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
        this.bookReviews = res.body
        console.log(this.bookReviews)
      }else{
        this.error = res
      }

    })

  // this.userId = this._AuthService.currentUser



  }
  addReview(){
    const reviewData = {
      content: this.addReviewForm.value.content,
      userId:this.userId,
    }
    console.log(reviewData);

    this._BooksService.addBookReviews(this.bookId,reviewData).subscribe((res)=>{
      console.log(reviewData);

      console.log(res);
    },(err)=>{
      console.log(err);

    })
  }



  ngOnInit(): void {
    this.addReviewForm = this._FormBuilder.group({
      userId:[],
      content:['', [Validators.required, Validators.minLength(3)]]
    });
  }



}

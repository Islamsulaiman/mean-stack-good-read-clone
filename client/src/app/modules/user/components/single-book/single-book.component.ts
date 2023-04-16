import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
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
  massage: "" | undefined
  addReviewForm!:FormGroup
  editReviewForm!: FormGroup;
  deleteReviewForm!: FormGroup;
  isLogged = false
  isChecked = false
  currentReview: any={
    title:'',
    content:''
  };

  formSubmitted = false;


  constructor(private _ActivatedRoute:ActivatedRoute,
     private _BooksService:BooksService,
     private _FormBuilder:FormBuilder,
     private _AuthService: AuthService,
     private _UserService: UsersService
      ){


       
    if(this._AuthService.currentUser.getValue()) this.isLogged = true

    this.bookId = this._ActivatedRoute.snapshot.params['bookId']

    this._BooksService.getSingleBook(this.bookId,{observe: 'response'}).subscribe((res)=>{
      if(res.status === 200){
        this.book = res.body.book
      }else{
        this.error = res
      }
    })

    this._BooksService.getBookReviews(this.bookId, this.skip, this.limit,{observe: 'response'}).subscribe((res)=>{
      if(res.status === 200){
        this.bookReviews = res.body
      }else{
        this.error = res
      }

    })
  }


  addBookToUserShelve(){
    this._BooksService.addBookToUserShelve(this._AuthService.currentUserId, this.bookId, {observe: 'response'}).subscribe((res)=>{
      console.log(res)

      if(res.status === 200){
        this.massage = res.body

      }else{
        this.error = res
      }
    })
  }


  // this.userId = this._AuthService.currentUser



  
  addReview(){
    const reviewData = {
      content: this.addReviewForm.value.content,
      userId:this._AuthService.currentUserId,
    }

    this._BooksService.addBookReviews(this.bookId,reviewData).subscribe((res)=>{

    },(err)=>{

    })
    this.formSubmitted = true;

  }

  getReviews(){
    this._BooksService.getBookReviews(this.bookId, this.skip, this.limit,{observe: 'response'}).subscribe((res)=>{
      if(res.status === 200){
        this.bookReviews = res.body
      }else{
        this.error = res
      }

    })
  }

  // editReview(){
  //   const reviewData = {
  //     content: this.editReviewForm.value.content,
  //     userId:this.userId,
  //   }
  //   this._BooksService.editBookReviews(this.bookId,reviewData).subscribe((res)=>{
  //       console.log(reviewData);
  //       console.log(res);

  //   },(err)=>{
  //     console.log(err);

  //   })
  // }

  // deleteReview(){
  //   const reviewData = {
  //     userId:this.userId
  //   }
  //   this._BooksService.deleteBookReviews(reviewData).subscribe((res)=>{
  //     console.log(res);
  //     this.getReviews()
  //   },(err)=>{
  //     console.log(err);

  //   })
  // }


  ngOnInit(): void {

    //Check user has book
    this._UserService.getUserById(this._AuthService.currentUserId, this.skip, this.limit,{observe: 'response'}).subscribe((res)=>{
      if(res.body.books.find((e:any)=> e.bookId._id === this.bookId)) this.isChecked = true
      else
      this.isChecked = false
    })
    this.addReviewForm = this._FormBuilder.group({
      userId:[],
      content:['', [Validators.required, Validators.minLength(3)]]
    });

    this.editReviewForm = this._FormBuilder.group({
      userId:[],
      content: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.deleteReviewForm = this._FormBuilder.group({
      userId:[],
    });
  }

  }





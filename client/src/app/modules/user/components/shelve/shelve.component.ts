import { Component, OnDestroy, OnInit, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

type data ={
  userId?:string
}

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent implements OnInit {

  i = 0;

  response: any ;

  books :any ;
  bookDb:any;
  // allBooks:any
  filteredBooks:any;

  error = ""

  bookStatus = ""
  bookStatusSwitch = true

  userId =""
  data:data={}

  limit = 12
  skip = 0
  currentPage = 1
  totalPages = 0

  constructor(private _UserService:UsersService, private _cdr:ChangeDetectorRef, private _renderer: Renderer2, private _Auth:AuthService){
    // this.loadData()
    
    this._UserService.getUserById(this._Auth.currentUserId, this.skip, this.limit,{observe: 'response'}).subscribe((res)=>{

      console.log("res",res)

      console.log(res.body.books)
      if(res.status === 200){
        this.books = this.bookDb =res.body.books
        this.userId = res.body._id
        this.totalPages = res.body.numberOfPages
      }else{
        this.error = res
      }
      
    })

    console.log("constructor run")

  }


  loadData(){
    this._UserService.getUserById(this._Auth.currentUserId, this.skip, this.limit,{observe: 'response'}).subscribe((res)=>{

      console.log("res",res)

      console.log(res.body.books)
      if(res.status === 200){
        this.books  = res.body.books
        this.userId = res.body._id
        this.totalPages = res.body.numberOfPages
      }else{
        this.error = res
      }
      
    })
  }




  ngOnInit(): void {
    
    this._UserService.getDataSubject().subscribe((data)=>{
      this.bookStatus=data

      // create a function that filters book and return only what match the status
      this.books = this.bookDb.filter((book:any)=> book.book_status == this.bookStatus)

      //length = zero means all books 
      if(this.books.length == 0 && this.bookStatus === "allBooks"){
        this.books = this.bookDb
        this.bookStatusSwitch = true;
      }else{
        console.log("else")
        this.bookStatusSwitch = false;
      }
    })

  }

  // pagination
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.skip = this.skip - this.limit
      if(this.bookStatusSwitch) this.loadData()
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.skip = this.skip + this.limit
      if(this.bookStatusSwitch) this.loadData()
    }
  }


  selectStar(index: number, cardNumber: number, book: any): number {

    const stars = document.querySelectorAll('.rating .star'); //array of all stars

    console.log("stars",stars)
    console.log("card number", cardNumber)
    console.log("stars length", stars.length)

    if(cardNumber === 1) {
      for (let i = 0; i < 5; i++) {
        if (i < index) {
          stars[i].classList.add('selected');
        } else {
          stars[i].classList.remove('selected');
        }
      }
    }else{
      const prevCardsStars = (cardNumber-1) * 5;

      for (let i = prevCardsStars ; i <= prevCardsStars + 4; i++) {

        if (i < prevCardsStars+index) {
          stars[i].classList.add('selected');
        } else {
          stars[i].classList.remove('selected');
        }
      }

    }

    this._UserService.changeBookRating(book.bookId._id, this.userId, index,{observe: 'response'}).subscribe((res)=>{
      console.log(res)

    })

    // this block of code is to remove rating dive and re-inserting it again to trigger detectChanges() to rebder the comp
    book.rating=index
    const userRatingElement = document.querySelector(`#book-${cardNumber} .userRating`);
    this._renderer.removeChild(userRatingElement?.parentNode, userRatingElement);
    const newRatingElement = this._renderer.createElement('div');
    const ratingText = this._renderer.createText(`${book.rating}x`);
    this._renderer.appendChild(newRatingElement, ratingText);
    this._renderer.appendChild(document.querySelector(`#book-${cardNumber} .bookDetails`), newRatingElement);


    this._cdr.detectChanges()
    
    return index
  }


  onDropdownChange(bookDbValues: any, selectedValue:any, cardNumber: number) {
    console.log('book status:',selectedValue.target.value);
    console.log("userId",this.userId)
    console.log("bookId",bookDbValues.bookId._id)

    this.data.userId = this.userId;

    this._UserService.changeBookState(bookDbValues.bookId._id, selectedValue.target.value, this.userId, {observe: 'response'}).subscribe((res)=>{
      console.log(res)
    })


  }





}

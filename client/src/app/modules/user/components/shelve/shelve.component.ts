import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

type data ={
  userId?:string
}

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent implements OnInit  {

  response: any ;

  books :any ;
  bookDb:any;
  filteredBooks:any;

  error = ""
  bookStatus = "full"
  userId =""
  data:data={}

  constructor(private _UserService:UsersService){
    this._UserService.getUserById("643890010923d775b0ea7872", {observe: 'response'}).subscribe((res)=>{

      console.log(res.body.books)
      if(res.status === 200){
        this.books =this.bookDb =res.body.books
        this.userId = res.body._id
      }else{
        this.error = res
      }
    })
    

  }

  ngOnInit(): void {



    this._UserService.getDataSubject().subscribe((data)=>{
      this.bookStatus=data
      console.log("shelve",this.bookStatus)
      console.log(this.books)

      // console.log("inside service: ",this.books[0].book_status)

      //create a function that filters book and return only what match the status
      this.books = this.bookDb.filter((book:any)=> book.book_status === this.bookStatus)
      if(this.books.length === 0){
        this.books = this.bookDb
      }
      console.log("filtred book",this.filteredBooks)

    })


  }




  selectStar(index: number): number {
    const stars = document.querySelectorAll('.rating .star');
    for (let i = 0; i < stars.length; i++) {
      if (i < index) {
        stars[i].classList.add('selected');
      } else {
        stars[i].classList.remove('selected');
      }
    }
    console.log(index)
    return index
  }


  onDropdownChange(bookDbValues: any, selectedValue:any) {
    console.log('book status:',selectedValue.target.value);
    console.log("userId",this.userId)
    console.log("bookId",bookDbValues.bookId._id)

    this.data.userId = this.userId;

    this._UserService.changeBookState(bookDbValues.bookId._id, selectedValue.target.value, this.userId, {observe: 'response'}).subscribe((res)=>{
      console.log(res)
    })
  }




}

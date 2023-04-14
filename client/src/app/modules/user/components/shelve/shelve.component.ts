import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent implements OnInit  {

  response: any ;
  books :any ;
  error = ""
  bookStatus  = ""

  constructor(private _UserService:UsersService){
    this._UserService.getUserById("643890010923d775b0ea7872", {observe: 'response'}).subscribe((res)=>{

      console.log(res.body.books)
      if(res.status === 200){
        this.books = res.body.books
      }else{
        this.error = res
      }
    })
    

  }

  ngOnInit(): void {
    console.log(this.books)  
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

  onElementClicked(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const elementContent = clickedElement.innerHTML;
    console.log('Clicked element content:', elementContent);
    // Do something with the element content
  }



  

}

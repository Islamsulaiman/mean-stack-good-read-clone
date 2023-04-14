import { Component } from '@angular/core';
import { Author } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent {

  skip = 0
  limit = 12

  authors:Author[] = []
  error  ="";
  authorId = "";
  constructor(private _AuthorsService: AuthorsService){

    //assume that every page have only 10 books, th 1st page from 0 to 10
    this._AuthorsService.getAuthors(this.skip, this.limit, {observe: 'response'}).subscribe((res:any)=>{

      console.log(res.body.book)

      if(res.status === 200){
        this.authors = res.body.book
        console.log(this.authors);

      }else{
        this.error = res
      }

    })
  }
getCurrentId(id:any){
 if(!id) return

 this.authorId = id
}


}

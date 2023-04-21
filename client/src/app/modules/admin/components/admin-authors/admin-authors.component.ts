import { Component, OnInit } from '@angular/core';
import { Author } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit{

  currentPage = 1

  limit = 8
  totalPages = 1;
  authors:Author[] = []
  error  ="";
  doneReq = false;
  currentID: any;
  constructor(private _AuthorsService: AuthorsService){}

  ngOnInit(){
    
    this.loadAuthors();
  }

  fullName = "";
  DOB: Date | any = new Date; 
getCurrentId(id:any, fullName:string, DOB: Date){
 if(!id) return
 this.fullName = fullName;
 this.DOB = new Date(DOB);
 this.currentID = id;
}

formData = new FormData();
file: File | undefined;


onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewAuthor(myForm: NgForm){

  const { fullName, DOB } = myForm.value;

  this.formData.set('fullName', fullName);
  this.formData.set('DOB', DOB);
  if(this.file) this.formData.set('image', this.file);

  this._AuthorsService.addAuthor(this.formData).subscribe(
    (response) => {
      alert("Author is added")
      myForm.reset();
      this.loadAuthors();
      this.doneReq =true
    },
    (error) => {
    }
  );
}

UpdateAuthor(myFormU:NgForm){
  const { fullName , DOB } = myFormU.value;

  this.formData.set('fullName',fullName);
  this.formData.set('DOB',DOB);
  if(this.file) this.formData.set('image',this.file);

  this._AuthorsService.updateAuthor(this.currentID, this.formData).subscribe((res)=>{
    alert("Author is updated")
    this.loadAuthors();


  },
  (err)=>{

  })

}

deleteAuthor() {
  this._AuthorsService.deleteAuthor(this.currentID).subscribe(
    (response) => {
      this.authors = this.authors.filter((book:any) => book._id !== this.currentID);
      alert("Author is deleted")
      this.doneReq =true
    },
    (error) => {
    }
  );
}



loadAuthors() {
  this._AuthorsService.getAuthors(this.currentPage, this.limit, {observe: 'response'}).subscribe((data:any)=>{
    console.log(data.body.authors);
    this.authors = data.body.authors;
    this.totalPages = data.body.totalPages;
  });
}






// Pagianate 
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.loadAuthors();
  }
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadAuthors();
  }
}




}


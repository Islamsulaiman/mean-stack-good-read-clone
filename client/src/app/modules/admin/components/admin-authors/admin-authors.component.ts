import { Component } from '@angular/core';
import { Author } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent {

  currentPage = 1

  limit = 8
  totalPages = 1;
  authors:Author[] = []
  error  ="";
  doneReq = false
  constructor(private _AuthorsService: AuthorsService){

    this.loadAuthors();
  }
getCurrentId(id:any){
 if(!id) return

 this._AuthorsService.id = id
 console.log(this._AuthorsService.id)
}

formData = new FormData();
file: File | undefined;


onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewAuthor(myForm: NgForm){

  const { fullName, DOB } = myForm.value;

  this.formData.append('fullName', fullName);
  this.formData.append('DOB', DOB);
  if(this.file) this.formData.append('image', this.file);

  this._AuthorsService.addAuthor(this.formData).subscribe(
    (response) => {
      console.log(response)
      this.doneReq =true
    },
    (error) => {
    }
  );
}

UpdateAuthor(myFormU:NgForm){
  const { fullName , DOB } = myFormU.value;

  this.formData.append('fullName',fullName);
  this.formData.append('DOB',DOB);
  if(this.file) this.formData.append('image',this.file);

  this._AuthorsService.updateAuthor(this.formData).subscribe((res)=>{
    console.log('Response',res);
    this.doneReq =true

  },
  (err)=>{

  })
}

deleteAuthor() {
  this._AuthorsService.deleteAuthor().subscribe(
    (response) => {
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


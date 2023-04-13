import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors: any;
  totalPages  = 1
  currentPage = 1

  constructor(private _authors: AuthorsService) {
    this.fetchData();
  }

  fetchData(){
    this._authors.getAuthors().subscribe((res) =>{
      this.authors = res.docs
      this.totalPages = res.totalPages;  
      this._authors.currentPage = res.page; 
      this.currentPage = res.page;
    });
  }
  
  nextPage() {
    if (this._authors.currentPage < this.totalPages) {
      this._authors.currentPage++;
      this.fetchData();
    }
  }

  prevPage() {
    if (this._authors.currentPage > 1) {
      this._authors.currentPage--;
      this.fetchData();
    }
  }

  get totalPagesArray() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }


  goToPage(page: number) {
    this._authors.currentPage = page;
    this.fetchData();
  }
}

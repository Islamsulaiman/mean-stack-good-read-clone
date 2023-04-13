import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;
  currentPage = 1
  totalPages = 1;

  constructor(private _author: AuthorsService) {

    console.log(_author.currentPage);
    
  }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this._author.getAuthors().subscribe((data) => {
      console.log(data);
      this.authors = data.authors;
      this.totalPages = data.totalPages;
      this.currentPage = this._author.currentPage;
    });
  }

  previousPage() {
    if (this._author.currentPage > 1) {
      this._author.currentPage--;
      this.loadAuthors();
    }
  }

  nextPage() {
    if (this._author.currentPage < this.totalPages) {
      this._author.currentPage++;
      this.loadAuthors();
    }
  }
}

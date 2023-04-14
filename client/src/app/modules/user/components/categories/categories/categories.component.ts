import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit  {
  categories: any;
  currentPage = 1
  totalPages = 1;

  constructor(private _category: CategoriesService) {

  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this._category.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data.category.categories;
      console.log(this.categories);
      this.totalPages = data.category.totalPages;
      this.currentPage = this._category.currentPage;
    });
  }

  previousPage() {
    if (this._category.currentPage > 1) {
      this._category.currentPage--;
      this.loadCategories();
    }
  }

  nextPage() {
    if (this._category.currentPage < this.totalPages) {
      this._category.currentPage++;
      this.loadCategories();
    }
  }
}

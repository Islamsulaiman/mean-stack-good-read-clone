import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category:any

  constructor(private _router:Router){}

  navigateToDetails() {
    this._router.navigate(['/category' , this.category._id ])
  }
}
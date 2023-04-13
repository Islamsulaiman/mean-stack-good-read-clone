import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() author:any

  constructor(private _router:Router){}

  navigateToDetails() {
    this._router.navigate(['/author' , this.author._id ])
  }
}

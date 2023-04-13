import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent   {


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
}

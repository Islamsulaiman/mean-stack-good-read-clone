import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BooksService } from '../../services/books.service';
Chart.register(...registerables);
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  constructor(private _BookService: BooksService){

    

  }

ngOnInit(){
  const myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Books', 'Authors', 'Categories'],
        datasets: [{
            label: '# of Count',
            data: [this._BookService.booksCount,this._BookService.authorsCount, this._BookService.categoriesCount],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',        
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
               'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }
}
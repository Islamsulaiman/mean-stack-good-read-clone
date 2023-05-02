import { Component } from '@angular/core';
import { ShelveComponent } from '../shelve/shelve.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-shelve-sidebar',
  templateUrl: './shelve-sidebar.component.html',
  styleUrls: ['./shelve-sidebar.component.css']
})
export class ShelveSidebarComponent {


  constructor(private _UserService:UsersService){}

  bookStatus(selectedValue:any) {

    console.log('side bar:',selectedValue);

    this._UserService.setData(selectedValue)
    
  }

}

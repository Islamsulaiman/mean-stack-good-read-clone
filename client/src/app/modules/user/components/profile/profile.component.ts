import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  formData = new FormData();
  file: File | undefined;
  wrongData = false

  userId:any;
  userImage = ''
  firstName = ''
  lastName = ''
  email = ''


constructor(private _userService:UsersService, private _auth:AuthService){
  
  if(this._auth.currentUser.getValue() != null){
    this.loadCategories()
    this.userId = this._auth.currentUserId
  }

  }

  loadCategories() {
    this._userService.getUserById(this._auth.currentUserId, 0, 0, {observe: 'response'}).subscribe(
      data => {
        this.userImage = data.body.image
        this.firstName = data.body.firstName
        this.lastName = data.body.lastName
        this.email = data.body.email
      },
      error => {
        return
    });
  }



onFileChange(event: any) {
  this.file = event.target.files[0];
}
  
updateUser(myForm:NgForm){
 console.log("myform: ",myForm.value)

  this._userService.updateUserData(myForm.value, this._auth.currentUserId, {observe: 'response'}).subscribe((res)=>{
    console.log('Response',res);
    this.wrongData = false

  },
  (err)=>{
    this.wrongData = true

  })
}

UpdateImage(){

  if(this.file) this.formData.append('image',this.file);
  this._userService.updateUserImage(this.formData, this._auth.currentUserId, {observe: 'response'}).subscribe((res)=>{
    window.location.reload();
  },
  (err)=>{
  })
}

}


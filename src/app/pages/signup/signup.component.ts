import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  hide = true;

  constructor(private userService:UserService,private snack:MatSnackBar){}

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };

  saveUser(){
    this.userService.addUser(this.user).subscribe((data:any)=>{
      console.log(data);
      Swal.fire('Success Done','Your Register Id is '+data.id,'success')
    },
    (error)=>{
      this.snack.open('Something Went Wrong !!','',{duration:3000,verticalPosition:'top',horizontalPosition:'right'})
      console.log(error);
    }
      
    )

  }
}

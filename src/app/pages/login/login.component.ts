import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;

  constructor(private userService:UserService,
    private snack:MatSnackBar,
    private loginService :LoginService,
    private route :Router){}

  public loginData ={
    username:'',
    password:'',
  };

  login(){
    this.loginService.generateTokens(this.loginData).subscribe((data:any)=>{
      console.log(data);
      this.loginService.loginUser(data.tokens);

      this.loginService.currentUser().subscribe((user:any)=>{
          this.loginService.setUser(user);
          console.log(user);
          if(this.loginService.getUserRole()=='ADMIN'){
              // window.location.href='/admin'
              this.route.navigate(['admin'])
          }
          else  if(this.loginService.getUserRole()=='NORMAL'){
            // window.location.href='/user'
            this.route.navigate(['user'])

          }
          else{
            this.loginService.logout();
          }
      })

      Swal.fire('Success Done','Your Tokens Generated ','success')
    },
    (error)=>{
      this.snack.open('Invalid Credentital !!','',{duration:3000,verticalPosition:'top',horizontalPosition:'right'})
      console.log(error);
    }
      
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  user!: User;
    constructor(public login :LoginService,private route :Router){}
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginSubject.asObservable().subscribe((data:any)=>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    })
  }

    logout(){
      this.login.logout();
     // this.route.navigate(['login']);
     window.location.reload();
    }
}

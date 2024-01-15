import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  user=null;
    constructor(public login :LoginService,private route :Router){}
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser().username;
  }

    logout(){
      this.login.logout();
     // this.route.navigate(['login']);
     window.location.reload();
    }
}

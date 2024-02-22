import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { MatSidenav } from '@angular/material/sidenav';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit,AfterViewInit {

   @ViewChild(DashboardComponent) dash!: DashboardComponent;
  isLoggedIn=false;
  user!: User;

    constructor(public login :LoginService,private route :Router){}
  ngAfterViewInit(): void {
   this.dash
  }
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

    toggleSidenav() {
      this.login.toggleSidenav(); // Call the toggleSidenav method from your LoginService
    }
}

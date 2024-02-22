import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private loginService: LoginService) {}
  
  ngAfterViewInit(): void {
    this.loginService.setSidenav(this.sidenav);
  }
  toggleSidenav() {
    this.loginService.toggleSidenav(); // Call the toggleSidenav method from your LoginService
  }
}

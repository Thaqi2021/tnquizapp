import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit{

  showFiller = false;
  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private loginService: LoginService) {}
  
  ngAfterViewInit(): void {
    this.loginService.setSidenav(this.drawer);
  }
  toggleSidenav() {
    this.loginService.toggleSidenav(); // Call the toggleSidenav method from your LoginService
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user !:User;
  constructor(private login:LoginService){}
  ngOnInit(): void {
   this.user =this.login.getUser();
  }


}

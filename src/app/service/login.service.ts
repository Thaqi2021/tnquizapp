import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from './baseURL';
import { Subject, retry } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
declare const $: any;


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  public loginSubject = new Subject<boolean>();
  private sidenav!: MatSidenav;
  constructor(private http:HttpClient) { }

  public generateTokens(loginData:any){
     return  this.http.post(`${baseURL}/auth/login`,loginData);
  } 

  public loginUser(token: any){
    localStorage.setItem("token",token)
    return true;
  } 

  public currentUser(){
    return this.http.get(`${baseURL}/auth/current-user`);
  }

  public isLoggedIn(){
    if (typeof localStorage !== 'undefined') {

    let tokenstr=localStorage.getItem('token')
    if(tokenstr ==undefined || tokenstr == ''|| tokenstr==null){
      return false;
    }
    else{
      return true;
    }
  }
  return true;
  }


  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
    
  }

  public getUser(){
    if (typeof localStorage !== 'undefined') {

    let userStr = localStorage.getItem("user")
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }
  return null;
  }

  public getUserRole(){
    let User = this.getUser();
    if(User !=null)
    return User.authorities[0].authority
  else
    return null;
  }


  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    if(this.isMobileMenu()){
      this.sidenav.mode="over";
    }
  }

  // Method to toggle the sidenav
  toggleSidenav() {
    if (this.sidenav) {
      if(this.isMobileMenu()){
        this.sidenav.mode="over";
      }
      this.sidenav.toggle();
    }
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}

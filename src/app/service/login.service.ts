import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from './baseURL';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
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
    let tokenstr=localStorage.getItem('token')
    if(tokenstr ==undefined || tokenstr == ''|| tokenstr==null){
      return false;
    }
    else{
      return true;
    }
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
    let userStr = localStorage.getItem("user")
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let User = this.getUser();
    return User.authorities[0].authority
  }
}

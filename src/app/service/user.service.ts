import { Injectable } from '@angular/core';
import { baseURL } from './baseURL';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return this.http.post(baseURL+'/user/save',user);
  }
}

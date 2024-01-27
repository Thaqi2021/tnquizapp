import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from './baseURL';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  public getCategories(){
    return this.http.get(`${baseURL}/category/`);
  }
  public addCategory(category:Category){
    return this.http.post(`${baseURL}/category/`,category);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from './baseURL';
import { Quiz } from '../model/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getquizes(){
    return this.http.get(`${baseURL}/quiz/`);
  }
  public addQiuz(quiz:any){
    return this.http.post(`${baseURL}/quiz/`,quiz);
  }

  public deleteQuiz(qid:number) {
    return this.http.delete(`${baseURL}/quiz/${qid}`);
  }

  public getQuizById(qid:number) {
    return this.http.get(`${baseURL}/quiz/${qid}`);
  }

  public getCategoryOfQuiz(cid:number){
    return this.http.get(`${baseURL}/quiz/category/${cid}`);
  }

  public getActiveQuiz() {
    return this.http.get(`${baseURL}/quiz/active`);
  }

  public getCategoryOfActiveQuiz(cid:number){
    return this.http.get(`${baseURL}/quiz/category/active/${cid}`);
  }

}

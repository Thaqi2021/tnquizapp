import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestion(){
    return this.http.get(`${baseURL}/question/`);
  }
  public addQuestion(question:any){
    return this.http.post(`${baseURL}/question/`,question);
  }

  public deleteQuestion(quesid:number) {
    return this.http.delete(`${baseURL}/question/${quesid}`);
  }

  public getQuestionById(quesid:number) {
    return this.http.get(`${baseURL}/question/${quesid}`);
  }
  public getQuestionOfQuiz(qid:number) {
    return this.http.get(`${baseURL}/question/quiz/question/${qid}`);
  }

  public getQuestionOfQuizForTest(qid:number) {
    return this.http.get(`${baseURL}/question/quiz/${qid}`);
  }

}

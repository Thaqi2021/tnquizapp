import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../../../model/Question';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrl: './view-question.component.scss'
})
export class ViewQuestionComponent implements OnInit{
  constructor(public activedRoute:ActivatedRoute,private questionService:QuestionService){}
  qid=null;
  quizname='';
  questions!:Question[];
  ngOnInit(): void {
    this.qid=this.activedRoute.snapshot.params['qid'];
    this.quizname=this.activedRoute.snapshot.params['quizname'];
    if(this.qid!=null)
      this.questionService.getQuestionOfQuiz(this.qid).subscribe((res:any)=>{
        console.log(res);
        this.questions=res;
      })
    
  }
}

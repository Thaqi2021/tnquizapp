import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { QuizService } from '../../../service/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../../model/Quiz';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.scss'
})
export class LoadQuizComponent implements OnInit {
  cid=0;
  quizzes!:Quiz[];
  constructor(private categoryService:CategoryService ,private qiuzService :QuizService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cid = params['cid'];
      this.updateQuiz();
    });
    
  }

  updateQuiz(){

    if(this.cid==0){
      this.qiuzService.getquizes().subscribe((data:any)=>{
          this.quizzes=data;
      })
      }else{
        this.qiuzService.getCategoryOfQuiz(this.cid).subscribe((data:any)=>{
            this.quizzes=data;
        })
      }
  }

}

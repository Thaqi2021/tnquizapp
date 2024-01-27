import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../../model/Question';
import { QuestionService } from '../../../service/question.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.scss'
})
export class AddQuestionComponent implements OnInit{
  constructor(public activedRoute:ActivatedRoute,private matSnackbar:MatSnackBar,private questionService:QuestionService){}
  qid=null;
  quizname='';
  answer='';
  question={
    content :'',
    image :'',
    option1 :'',
    option2 :'',
    option3 :'',
    option4:'',
    answer :'',
     quiz :{
      qid:null,
     },
  };
  ngOnInit(): void {
    this.qid=this.activedRoute.snapshot.params['qid'];
    this.quizname=this.activedRoute.snapshot.params['quizname'];
    // if(this.qid!=null)
    //   this.questionService.getQuestionOfQuiz(this.qid).subscribe((res:any)=>{
    //     console.log(res);
    //     this.questions=res;
    //   })
    
  }
  addQuestion(){
    if(this.question.content.trim()==''||this.question.content==null){
      this.matSnackbar.open("Question Content Required",'',{
        duration:3000,
      })
      return;
    }
    if(this.question.option1.trim()==''||this.question.option1==null){
      this.matSnackbar.open("Option A Required",'',{
        duration:3000,
      })
      return;
    }
    if(this.question.option2.trim()==''||this.question.option2==null){
      this.matSnackbar.open("Option B Required",'',{
        duration:3000,
      })
      return;
    }
    if(this.question.option3.trim()==''||this.question.option3==null){
      this.matSnackbar.open("Option C Required",'',{
        duration:3000,
      })
      return;
    }
    if(this.question.option4.trim()==''||this.question.option4==null){
      this.matSnackbar.open("Option D Required",'',{
        duration:3000,
      })
      return;
    }
    if(this.question.answer.trim()==''||this.question.answer==null){
      this.matSnackbar.open("Choose the Answer",'',{
        duration:3000,
      })
      return;
    }
    this.question.quiz.qid=this.qid;
    this.questionService.addQuestion(this.question).subscribe((res:any)=>{
      Swal.fire('Successfully','Your Question added.Id'+res.quesId,'success');
    })

  }
}

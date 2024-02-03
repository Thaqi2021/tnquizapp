import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../../../model/Question';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrl: './view-question.component.scss'
})
export class ViewQuestionComponent implements OnInit{
  constructor(public activedRoute:ActivatedRoute,
    private questionService:QuestionService,
    private matSnackbar :MatSnackBar){}
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

  deleteQuestion(quesId:number){
    Swal.fire({icon:'info',showCancelButton:true,confirmButtonText:'Are you sure ,Want to Delete ?'}).then((result)=>{
      if(result.isConfirmed){
        this.questionService.deleteQuestion(quesId).subscribe((res)=>{
          this.questions=this.questions.filter((question)=>question.quesId!=quesId);
          Swal.fire('Successfully','Question Deleted','success');

      },
      (error)=>{
        this.matSnackbar.open('Error in deleting question','',{
          duration:3000,
        })
        console.log(error);
      })
      }
    })
     
  }
  updateQuestion(quesId:number){

  }
}

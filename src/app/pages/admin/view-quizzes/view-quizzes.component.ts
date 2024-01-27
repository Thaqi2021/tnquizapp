import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../service/quiz.service';
import { Quiz } from '../../../model/Quiz';
import Swal from 'sweetalert2';
import { error } from 'node:console';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.scss'
})
export class ViewQuizzesComponent implements OnInit {

  quiz!:Quiz[];

  constructor(private quizService:QuizService){}
  ngOnInit(): void {
    this.quizService.getquizes().subscribe((res:any)=>{
      this.quiz=res;

    },
    (error)=>{
      console.log(error)
      Swal.fire('Error !!','Error in loading data','error')
    }
    )
 
  }

  deleteQuiz(qid: number) {
    Swal.fire({
      icon:'info',
      text:'Are you sure to Delete the Quiz ?',
      confirmButtonText:'Yes',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this.quizService.deleteQuiz(qid).subscribe((res:any)=>{
          this.quiz=this.quiz.filter((quiz)=>quiz.qid!=qid);
          Swal.fire('Successfully','Quiz Deleted','success');
        },
        (error)=>{
          Swal.fire('Info','Error in deleting Quiz','error')

        }
        
        );
      }
    })

    }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../service/quiz.service';
import { Quiz } from '../../../model/Quiz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.scss'
})
export class InstructionComponent  implements OnInit{

  constructor(private activedRoute:ActivatedRoute,
    private quizService:QuizService,
    private route:Router
    ){}
  qid!:number
  quiz!:Quiz;
  ngOnInit(): void {
    this.qid=this.activedRoute.snapshot.params["qid"];
    if(this.qid!=0){
      this.quizService.getQuizById(this.qid).subscribe((data:any)=>{
        this.quiz=data;
        console.log(data)
      })
    }
  }

  startTest(){
    Swal.fire({
      title: "Do you want to start the test?",
      showCancelButton: true,
      confirmButtonText: "Start",
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          this.route.navigate(['/start/'+this.qid]);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}

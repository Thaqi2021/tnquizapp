import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../../../model/Question';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements OnInit {

  constructor(private locationSt: LocationStrategy, private activeRoue: ActivatedRoute,
    private questionService:QuestionService) { }
  qid!: number;
  questions!:Question[];

  correctAns=0;
  markGot:String="0.0";
  attempedQuestion=0;
  isSubmit=false;
  timer:any;
  ngOnInit(): void {
    // document.documentElement.requestFullscreen().catch((err) => console.error(err));

    this.preventBackButton();
    this.qid = this.activeRoue.snapshot.params['qid'];
    this.loadQuestion();
  }
  loadQuestion(){
    this.questionService.getQuestionOfQuizForTest(this.qid).subscribe((data:any)=>{
      console.log(data);
      console.log(this.questions)
      this.questions=data;
      this.timer = this.questions.length*2*60;
      this.startTimer();

     
    })
  }
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);

    })
  }

  submitTest(){
    Swal.fire({
      title: "Do you want to Submit the test?",
      showCancelButton: true,
      confirmButtonText: "Submit",
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.evalQuiz();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
  }
  getFormattedTime(){
    let mm=Math.floor(this.timer/60);
    let ss= this.timer -mm*60;
    return `${mm} min : ${ss} sec`;
  }
  evalQuiz(){
    this.isSubmit=true;
    // let singleMark=this.questions[0].quiz.maxMark/this.questions.length;

      // this.questions.forEach(q=>{
      //   if(q.answer==q.givenAnswer){
      //     this.correctAns++;
      //     this.markGot+=singleMark;
      //   }
      //   if(q.givenAnswer.trim()!=''){
      //     this.attempedQuestion++;
      //   }
      // })
      this.questionService.getTheReslt(this.questions).subscribe((data:any)=>{
        if(data=="No"){
          console.log("No Evaluation");
        }else{
        this.correctAns=data.correctAns;
        this.markGot= Number(data.markGot).toFixed(2);
        this.attempedQuestion=data.attempedQuestion;
        }
      })
      console.log("correct Answer",this.correctAns)
      console.log("Marks Got",this.markGot)
      console.log("Attempted Question",this.attempedQuestion)
  }

  printPage(){
    window.print();
  }
}

import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../../../model/Question';

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
  ngOnInit(): void {
    // document.documentElement.requestFullscreen().catch((err) => console.error(err));

    this.preventBackButton();
    this.qid = this.activeRoue.snapshot.params['qid'];
    this.loadQuestion();
  }
  loadQuestion(){
    this.questionService.getQuestionOfQuizForTest(this.qid).subscribe((data:any)=>{
      console.log(data);
      this.questions=data;
    })
  }
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);

    })
  }
}

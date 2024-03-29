import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../service/quiz.service';
import { Quiz } from '../../../model/Quiz';
import { Category } from '../../../model/Category';
import { CategoryService } from '../../../service/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.scss'
})
export class AddQuizComponent implements OnInit {
  moduleName='Add';

  public quiz={
    qid:null,
    title:'',
    description:'',
    maxMark:null,
    noOfQuestion:null,
    isActive:false,
    category:{
      cid:null
    }
  }
  qid!:null;
  categeries!:Category[];
  constructor(private quizService :QuizService,
    private categoryService:CategoryService,
    private matSnackbar :MatSnackBar,
    private activeRoute:ActivatedRoute
    ){}
  ngOnInit(): void {

      this.categoryService.getCategories().subscribe((res:any)=>{
          this.categeries=res;
      },
      )
      this.qid= this.activeRoute.snapshot.params['qid'];
      if(this.qid!=undefined||this.qid!=null){
        this.quizService.getQuizById(this.qid).subscribe((res:any)=>{
          this.quiz=res;
        })
        this.moduleName='Update'
      }
  }
  addQuiz(){
    if(this.quiz.title.trim()==''|| this.quiz.title.trim()==null){
      this.matSnackbar.open("Title Required",'',{
        duration:3000,
      })
      return;
    }
    if(this.quiz.category.cid==''|| this.quiz.category.cid==null){
      this.matSnackbar.open("Category Required",'',{
        duration:3000,
      })
      return;
    }
    this.quizService.addQiuz(this.quiz).subscribe((res:any)=>{
      if(this.moduleName=='Update'){
        Swal.fire('Successfully Updated','your saved Id:'+res.qid,'success')
      }else{
      Swal.fire('Successfully','your saved Id:'+res.qid,'success')
      }
    })
  }

}

import { Component } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../model/Category';
import Swal from 'sweetalert2';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
}) 
export class AddCategoryComponent {
  constructor(private categoryService: CategoryService,private matSnackbar:MatSnackBar){}

  public category={
    cid: 0,
    title: '',
    description: ''
  };
  addCategory(){
    if(this.category.title.trim()==''|| this.category.title.trim()==null){
      this.matSnackbar.open("Title Required",'',{
        duration:3000,
      })
      return false;
    }
    this.categoryService.addCategory(this.category).subscribe((res:any)=>{
      Swal.fire('successfully','Category added. Id:- '+res.cid,'success')
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error !!','Error in loading data','error')
    }
    )
    return true;
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import Swal from 'sweetalert2';
import { Category } from '../../../model/Category';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.scss'
})
export class ViewCategoriesComponent implements OnInit{
 constructor(private category:CategoryService){}
 categories: Category[] | undefined;
  ngOnInit(): void {
      this.category.getCategories().subscribe((data:any)=>{
        this.categories=data;

      },
      (error)=>{
        console.log(error)
        Swal.fire('Error !!','Error in loading data','error')
      }


      )
  }

 

}


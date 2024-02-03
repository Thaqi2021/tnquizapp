import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../model/Category';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(private categoryService:CategoryService,private matSnakbar:MatSnackBar){}
  categories!:Category[];
  ngOnInit(): void {
   this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories=data;
   },
   (error)=>{
      this.matSnakbar.open('Error in loading ','',{
        duration:3000,
      });
   }
   
   )
    
  }

}

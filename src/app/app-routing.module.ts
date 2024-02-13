import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'user',component:UserDashboardComponent,
  // pathMatch:'full',
  canActivate:[NormalGuard],
  children:[
    {
    path:':cid',
    component:LoadQuizComponent
    },
    {
      path:'instruction/:qid',
      component: InstructionComponent
      },
     
  ]
},
{
  path:'start/:qid',
  component: StartComponent,
  canActivate:[NormalGuard],
  },
  {path:'admin',component:DashboardComponent,
  // pathMatch:'full',
  canActivate:[AdminGuard],
  children:[
    {
    path:'profile',
    component:ProfileComponent
    },
    {
      path:'',
      component:WelcomeComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'view-quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'add-quiz/:qid',
        component:AddQuizComponent
      },
      {
        path:'view-question/:qid/:quizname',
        component:ViewQuestionComponent
      },
      {
        path:'add-question/:qid/:quizname/:quesid',
        component:AddQuestionComponent
      }
  ],
 },

  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

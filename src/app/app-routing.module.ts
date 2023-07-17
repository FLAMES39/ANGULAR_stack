import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { HomeComponent } from './home/home.component';
import { CategoryhomeComponent } from './category/categoryhome/categoryhome.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes:Routes=[
  {path:'', component:HomeComponent},
  {path:'Category',component:CategoryhomeComponent},

  {path:'movies',data:{message:'ADD A NEW MOVIE.......'},component:MovieAddComponent},
  {path:'nofound', component:NotFoundComponent},
  {path:'**' ,redirectTo:'/nofound'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

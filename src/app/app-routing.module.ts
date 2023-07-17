import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { HomeComponent } from './home/home.component';
import { CategoryhomeComponent } from './category/categoryhome/categoryhome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category/category.component';
import { SinglecategoryComponent } from './category/singlecategory/singlecategory.component';
import { MoviedetailsComponent } from './movie-add/moviedetails/moviedetails.component';
import { UpdateComponent } from './movie-add/update/update.component';
import { CanActivateService } from './services/can-activate.service';
import { CanDeactivateService } from './services/can-deactivate.service';
import { ResolverService } from './services/resolver.service';



const routes:Routes=[
  {path:'', loadComponent:()=> import('../app/home/home.component').then(m=>m.HomeComponent)},
  {path:'Category',loadComponent:()=> import('../app/category/categoryhome/categoryhome.component').then(m=>m.CategoryhomeComponent)},
  // {path:'one',
  // loadChildren:()=>import( '../app/category/category.module').then(m=>m.CategoryModule)},
  {path:'one',canActivateChild:[CanActivateService] ,loadComponent:()=> import('../app/category/category/category.component').then(c=>c.CategoryComponent),
  children:[
    {path:':Category', resolve:{movieData:ResolverService} ,loadComponent:()=> import('../app/category/singlecategory/singlecategory.component').then(m=>m.SinglecategoryComponent)},
    {path:'describe/:id', loadComponent:()=> import('../app/movie-add/moviedetails/moviedetails.component').then(m=>m.MoviedetailsComponent)},
    {path:'', loadComponent:()=> import('../app/category/categoryhome/categoryhome.component').then(m=>m.CategoryhomeComponent)},
    {path:'movie/update/:id',canDeactivate:[CanDeactivateService],loadComponent:()=> import('../app/movie-add/update/update.component').then(m=>m.UpdateComponent)}

  ]},
  {path:'movies',data:{message:'ADD A NEW MOVIE'},canDeactivate:[CanDeactivateService],loadComponent:()=> import('../app/movie-add/movie-add.component').then(m=>m.MovieAddComponent)},
  {path:'notfound', component:NotFoundComponent},
  {path:'**' ,redirectTo:'/notfound'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { HomeComponent } from './home/home.component';
import { CategoryhomeComponent } from './category/categoryhome/categoryhome.component';
import { SinglecategoryComponent } from './category/singlecategory/singlecategory.component';
import { CategoryComponent } from './category/category/category.component';
import { MoviedetailsComponent } from './movie-add/moviedetails/moviedetails.component';
import { NotfoundComponent } from './movie-add/notfound/notfound.component';
import { CanActivateService } from './services/can-activate.service';
import { UpdateComponent } from './movie-add/update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateService } from './services/can-deactivate.service';
import { ResolverService } from './services/resolver.service';


const routes:Routes=[
  {path:'', component:HomeComponent},
  {path:'Category',component:CategoryhomeComponent},
  {path:'one',canActivateChild:[CanActivateService] ,component:CategoryComponent,children:[
    {path:':Category', resolve:{movieData:ResolverService} ,component:SinglecategoryComponent},
    {path:'describe/:id', component:MoviedetailsComponent},
    {path:'', component:CategoryhomeComponent},
    {path:'movie/update/:id',canDeactivate:[CanDeactivateService],component:UpdateComponent}


  ]},
  {path:'movies',data:{message:'ADD A NEW MOVIE.......'},component:MovieAddComponent},
  {path:'nofound', component:NotFoundComponent},
  {path:'**' ,redirectTo:'/nofound'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

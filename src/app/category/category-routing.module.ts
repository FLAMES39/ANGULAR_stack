import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailsComponent } from '../movie-add/moviedetails/moviedetails.component';
import { UpdateComponent } from '../movie-add/update/update.component';
import { CanActivateService } from '../services/can-activate.service';
import { CanDeactivateService } from '../services/can-deactivate.service';
import { ResolverService } from '../services/resolver.service';
import { CategoryComponent } from './category/category.component';
import { CategoryhomeComponent } from './categoryhome/categoryhome.component';
import { SinglecategoryComponent } from './singlecategory/singlecategory.component';

const routes:Routes=[
  {path:'',canActivateChild:[CanActivateService] ,component:CategoryComponent,children:[
    {path:':Category', resolve:{movieData:ResolverService} ,component:SinglecategoryComponent},
    {path:'describe/:id', component:MoviedetailsComponent},
    {path:'', component:CategoryhomeComponent},
    {path:'movie/update/:id',canDeactivate:[CanDeactivateService],component:UpdateComponent}

  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CategoryRoutingModule { }

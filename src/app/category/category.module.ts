import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryComponent } from './category/category.component';
import { SinglecategoryComponent } from './singlecategory/singlecategory.component';
import { MoviedetailsComponent } from '../movie-add/moviedetails/moviedetails.component';
import { CategoryhomeComponent } from './categoryhome/categoryhome.component';
import { UpdateComponent } from '../movie-add/update/update.component';



@NgModule({
  declarations: [
    CategoryComponent,
    SinglecategoryComponent,
    MoviedetailsComponent,
    CategoryhomeComponent,
    UpdateComponent

  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }

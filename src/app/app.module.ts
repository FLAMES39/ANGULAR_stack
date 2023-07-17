import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { shotPipe } from 'src/pipes/short';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { AppBgDirective } from './directives/appDirective';
import { SecondDirectiveDirective } from './directives/second-directive.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CategoryComponent } from './category/category/category.component';
import { SinglecategoryComponent } from './category/singlecategory/singlecategory.component';
import { CategoryhomeComponent } from './category/categoryhome/categoryhome.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import {  RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MoviedetailsComponent } from './movie-add/moviedetails/moviedetails.component';
import { NotfoundComponent } from './movie-add/notfound/notfound.component';
import { UpdateComponent } from './movie-add/update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateService } from './services/can-deactivate.service';
import { CategoryModule } from './category/category.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddStudentComponent,
    DisplayStudentComponent,
    shotPipe,
    AddproductComponent,
    DisplayproductComponent,
    AppBgDirective,
    SecondDirectiveDirective,
    ReactiveFormComponent,
    MovieAddComponent,
    NotfoundComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

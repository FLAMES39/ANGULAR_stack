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
import { MovieAddComponent } from './movie-add/movie-add.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
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
    
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

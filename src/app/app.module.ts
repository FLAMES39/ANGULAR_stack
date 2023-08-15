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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryModule } from './category/category.module';
import { SubjectComponent } from './subject/subject.component';
import { Subject2Component } from './subject2/subject2.component';





@NgModule({
    declarations: [
        AppComponent,
        AddStudentComponent,
        DisplayStudentComponent,
        shotPipe,
        AddproductComponent,
        DisplayproductComponent,
        AppBgDirective,
        SecondDirectiveDirective,
        ReactiveFormComponent,
        // SubjectComponent,
        // Subject2Component,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        Subject2Component,
        SubjectComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }

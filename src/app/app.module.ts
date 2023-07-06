import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { shotPipe } from 'src/pipes/short';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { AppBgDirective } from './directives/appDirective';
import { SecondDirectiveDirective } from './directives/second-directive.directive';

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
    SecondDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

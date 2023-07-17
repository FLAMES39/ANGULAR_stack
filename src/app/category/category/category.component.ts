import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule,RouterModule]
})
export class CategoryComponent {
   constructor(public movieservice:MovieServiceService){

   }
getCategories(){
  this.movieservice.getCategory()
}
}

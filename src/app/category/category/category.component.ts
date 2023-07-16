import { Component } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
   constructor(public movieservice:MovieServiceService){

   }
getCategories(){
  this.movieservice.getCategory()
}
}

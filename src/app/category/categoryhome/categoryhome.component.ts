import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/interfaces';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-categoryhome',
  templateUrl: './categoryhome.component.html',
  styleUrls: ['./categoryhome.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class CategoryhomeComponent implements OnInit{
  movies!:movie[]
   constructor(private movieService:MovieServiceService){}
  ngOnInit(): void {
    this.movies=this.movieService.getmovie()
  }

   
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { movie } from 'src/app/interfaces';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-singlecategory',
  templateUrl: './singlecategory.component.html',
  styleUrls: ['./singlecategory.component.css']
})
export class SinglecategoryComponent implements OnInit{
  movies:movie[]=[]
  movieData:movie[]=[]
  constructor(public movieServices: MovieServiceService, private router:Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.categories=(this.route.snapshot.params['Category'])
    // console.log((this.route.snapshot.params['Category']));
// this.route.params.subscribe((p:Params)=>{
// this.movies=this.movieServices.getMovieCategory(p['Category'])
// console.log(this.movies);
this.route.data.subscribe((data:Data)=>{
  this.movies=data['movieData']

  
})
  }

  description(id:string){
    console.log(id);
    
    this.router.navigate(['/one','describe',id])
  }
}
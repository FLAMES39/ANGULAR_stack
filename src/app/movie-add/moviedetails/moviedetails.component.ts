import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { movie } from 'src/app/interfaces';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movie: movie | undefined; // Change the variable name to 'movie' instead of 'movies'

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      const movieId = p['id'];
      this.movie = this.movieService.getMovieById(movieId);
    });

    console.log(this.route.snapshot.params['id']);
  }
}

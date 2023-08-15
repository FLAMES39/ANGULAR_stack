import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate, movie } from 'src/app/interfaces';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule,ReactiveFormsModule]
})
export class UpdateComponent implements OnInit, CanComponentDeactivate {
  form!: FormGroup;
  movies: movie[] = [];
  isUpdateClicked = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      prices: ['', [Validators.required]]
    });

    this.route.params.subscribe((p: Params) => {
      const movie = this.movieService.getMovieById(p['id']);
      this.movies = [movie];

      this.form.patchValue({
        name: movie.name,
        prices: movie.price,
        category: movie.category
      });
    });
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    // console.log("Name: ", this.form.get('name')?.valu);
    // console.log("Category: ", this.form.value.category);
    // console.log("Prices: ", this.form.value.prices);
    
    if (
      (this.form.value.name === this.form.get('name')?.value ||
        this.form.value.category === this.form.get('category')?.value ||
        this.form.value.prices === this.form.get('prices')?.value) &&
      !this.isUpdateClicked
    ) {
      return confirm("Do you want to discard changes?");
    } else {
      return true;
    }
    
  }

  onSubmit() {
    this.isUpdateClicked = true;
  }
}

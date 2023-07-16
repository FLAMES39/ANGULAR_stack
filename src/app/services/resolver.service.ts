import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MovieServiceService } from './movie-service.service';
import { movie } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<movie[]>{

  constructor(private movieservice:MovieServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): movie[] | Observable<movie[]> | Promise<movie[]> {
    return this.movieservice.getMovieCategory(route.params['Category']);
  }
}

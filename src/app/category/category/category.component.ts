import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable, Subscription, filter, interval, map, max, take, tap } from 'rxjs';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CategoryComponent implements OnInit, OnDestroy {
  constructor(public movieservice: MovieServiceService) {
  }

  sub!: Subscription

  ngOnInit(): void {
    // this.sub = interval(1000).subscribe((data) => {
    //   console.log(data);

    // }, (error) => {

    // }, () => { })
    const customObservable= new Observable<number>(Observer=>{
      let count=0
      setInterval(()=>{
        Observer.next(count)
        if(count===10){
          Observer.error(new Error('An error occurred'))
        }
        if(count===5){
          Observer.complete()
        }
        count++
        
      },1000)
    })
    this.sub= customObservable.pipe(
      //observable operators
      map(x=>x *100),
      tap(x=>console.log('from tap', x)
      ),
      filter(x=>x<300),
      take(3),
      max()
    ).subscribe((number)=>{
      console.log(number);
      
    },
    (error)=>{
      //add logic to get a display error and login
      console.log(error.message);
      
    },
    ()=>{
      console.log("Done");
      
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  getCategories() {
    this.movieservice.getCategory()
  }
}

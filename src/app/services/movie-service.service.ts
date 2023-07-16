import { Injectable } from '@angular/core';
import { movie } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private movie:movie[]=[
    {
      id:'SVG',
    name:'SISU',
    category:'Drama',
    image:'https://www.goldderby.com/wp-content/uploads/2021/02/notebook-2.jpg?w=640',
    price:24000
    },
    {
      id:'FRC',
    name:'LASVEGAS',
    category:'comedy',
    image:'https://i.ytimg.com/vi/dIV9H1_CCk0/maxresdefault.jpg',
    price:24000
    },{
    id:'JYG',
    name:'JOHNWHICK',
    category:'Conspiracy',
    image:'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/extraction-2-01.jpg',
    price:24000
    },
    {
      id:'BJI',
    name:'JOHNWHICK',
    category:'Conspiracy',
    image:'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/extraction-2-01.jpg',
    price:24000
    },
    {
      id:'BIG',
    name:'CHRONICLES',
    category:'War',
    image:'https://timesofindia.indiatimes.com/photo/96450680.cms',
    price:24000
    },
     {
      id:'iku',
    name:'SISU',
    category:'Drama',
    image:'https://www.goldderby.com/wp-content/uploads/2021/02/notebook-2.jpg?w=640',
    price:24000
    },{
    id:'hgf',
    name:'JOHNWHICK',
    category:'Conspiracy',
    image:'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/extraction-2-01.jpg',
    price:24000
    }
  ]
  constructor() { }

  getCategory(){
    let category:string[]=[]
    for(let movie of this.movie){
     if(!category.includes(movie.category)){
      category.push(movie.category)
     }
    }
    return category
  }
  getmovie(){
    return this.movie
  }
  addMovie(newMovie:movie){
    this.movie.push(newMovie)
  }
  getMovieCategory(category:string){
      let movies= this.movie.filter(type=>{
        return type.category===category
      })
      return movies
  }
  getMovieById(id: string) {
    return this.movie.find(movie => movie.id === id) as movie;
  }
}

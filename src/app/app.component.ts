import { Component, EventEmitter } from '@angular/core';
import { MovieServiceService } from './services/movie-service.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['h1{color:red}']
})
export class AppComponent {
  // title = 'stack_app';
  // users: { name: string, age: number ,description:string}[] = [
  //   {
  //     name: "christian"
  //     , age: 23,
  //     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur soluta veritatis exercitationem, tempore, quos, unde repudiandae cupiditate maxime fugiat facilis nobis quasi autem. Distinctio adipisci sint ad! Neque, quasi!"
  //   },
  //   {
  //     name: "Junior"
  //     , age: 20,
  //     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur soluta veritatis exercitationem, tempore, quos, unde repudiandae cupiditate maxime fugiat facilis nobis quasi autem. Distinctio adipisci sint ad! Neque, quasi!"
  //   },
  //   {
  //     name: "LINUS"
  //     , age: 11,
  //     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur soluta veritatis exercitationem, tempore, quos, unde repudiandae cupiditate maxime fugiat facilis nobis quasi autem. Distinctio adipisci sint ad! Neque, quasi!"
  //   },
  //   {
  //     name: "PAUL"
  //     , age: 55,
  //     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur soluta veritatis exercitationem, tempore, quos, unde repudiandae cupiditate maxime fugiat facilis nobis quasi autem. Distinctio adipisci sint ad! Neque, quasi!"
  //   }
  // ]
  // addStudent(event:{name:string,age:number}){
  //   this.users.push({name:event.name,age:event.age,description:"description"})
  // }
  // deleteUser(i:number){
  //   this.users.splice(i,1)
  // }
  show=true;
savedName='Angular'
changename(){
  this.savedName='Typescript'

}
showbtn(){
  this.show=!this.show
}
constructor(public movieService:MovieServiceService,public authservice:AuthService){}
// getMovies(){
//   this.movieService.getmovie()
// }


}

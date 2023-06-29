import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['h1{color:red}']
})
export class AppComponent {
  title = 'stack_app';
  users: { name: string, age: number }[] = [
    {
      name: "christian"
      , age: 23
    },
    {
      name: "christian"
      , age: 23
    }
  ]
  addStudent(event:{name:string,age:number}){
    this.users.push({name:event.name,age:event.age})
  }
  deleteUser(i:number){
    this.users.splice(i,1)
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent {
  @Input({required:true}) users:{name:string,age:number,description:string}[]=[]
  date=new Date()
  price=1000
  p1=3.147564356
  deleteUser(i:number){
    this.users.splice(i,1)
  }
}

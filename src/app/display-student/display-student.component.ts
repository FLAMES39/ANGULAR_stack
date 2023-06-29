import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent {
  @Input({required:true}) users:{name:string,age:number}[]=[]
  deleteUser(i:number){
    this.users.splice(i,1)
  }
}

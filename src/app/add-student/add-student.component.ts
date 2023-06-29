import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Output() add:EventEmitter<{name:string,age:number}>=new EventEmitter()
  addUser(name:string,age:string){
  this.add.emit({name,age:+age})
  }
}

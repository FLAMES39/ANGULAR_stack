import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements AfterViewChecked,AfterViewInit{
  ngAfterViewInit(): void {
    console.log("WACHA");  }
  ngAfterViewChecked(): void {
    console.log("twaaa");
    
  }
  @Output() add:EventEmitter<{name:string,age:number}>=new EventEmitter()
  @ViewChild('name') inputName!:ElementRef
  addUser(name:string,age:string){
  this.add.emit({name,age:+age})
  console.log(this.inputName.nativeElement.value);
  }



}

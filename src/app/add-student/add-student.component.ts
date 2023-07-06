import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent{
  // ngAfterViewInit(): void {
  //   console.log("WACHA");  }
  // ngAfterViewChecked(): void {
  //   console.log("twaaa");
    
  // }
  // @Output() add:EventEmitter<{name:string,age:number}>=new EventEmitter()
  // @ViewChild('name') inputName!:ElementRef
  // addUser(name:string,age:string){
  // this.add.emit({name,age:+age})
  // console.log(this.inputName.nativeElement.value);
  // }

  Gender=['Female','male', 'other']
  onSubmit(form:NgForm){
  this.form.resetForm()
    
    
    
  }
  @ViewChild('form') form!:NgForm
  prepopulate(){
    this.form.setValue({
      personalDetails:{
        name:'christian abiodun',
        email:'christian@gmail.com'
      },
      comments:'Angular is Fun',
      languages:'java',
      gender:'male'
    })
  }
  prepopulate1(){
    this.form.form.patchValue({
      personalDetails:{
        name:'christian abiodun',
        email:'christian@gmail.com'
      },
    })
  }

}

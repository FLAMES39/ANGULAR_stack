import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  // name:string='CHRISTIAN ABIODUN'
  // send(event:Event){
  //   let value= (event.target as HTMLInputElement).value
  //   this.inputText=value
  //   console.log(value);
  // }
  // showbtn=false
  // constructor(){
  //   setTimeout(()=>{
  //     this.showbtn=true
  //   },3000)
  // }
  // inputText:string='ANGULAR IS AWESOME'
  // @ViewChild('input') input!:ElementRef //viewing the input value from html to ts
  // show(){
  //  this.inputText=this.input.nativeElement.value
   
  // }
 
users:{
  name:string,
  age:number}[]=[]
  getCurrentDateTime(): Date {
    const currentDateTime: Date = new Date();
    return currentDateTime;
  }
  day= new Date().getDay()
  addUser(name:string,age:string){
    this.users.push({name,age:+age})
    return this.day;
  }
  deleteUser(i:number){
  this.users.splice(i,1)
  }
}
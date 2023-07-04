import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnChanges, OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy{
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
 
// users:{
//   name:string,
//   age:number}[]=[]
//   getCurrentDateTime(): Date {
//     const currentDateTime: Date = new Date();
//     return currentDateTime;
//   }
//   day= new Date().getDay()
//   addUser(name:string,age:string){
//     this.users.push({name,age:+age})
//     return this.day;
//   }
//   deleteUser(i:number){
//   this.users.splice(i,1)
//   }



constructor(){
  console.log('constructor logged');
  
}





@Input({required:true}) name=""
@ViewChild('title') title!:ElementRef
@ViewChild('lorem') lorem!:ElementRef
ngOnChanges(changes:SimpleChanges){
  console.log('on changes called');
  console.log(changes);
  
}
ngOnInit(){
    console.log('on init called ');
 
    
    
}
ngDoCheck(): void {
  console.log('ng dochek is running');
  
 }
 ngAfterContentInit(): void {
  console.log('aftercontentinit executed');
  

  
}
 ngAfterContentChecked(): void {
   console.log('aftercontentchecked executed');
   
 }

 ngAfterViewInit(): void {
  console.log("View init");
  
  if(this.title){
  console.log(this.title.nativeElement.textContext);

  }
  
}
ngAfterViewChecked(): void {
  console.log("View checked");

}
ngOnDestroy(): void {
  console.log(' Destroyed');
  
}

}
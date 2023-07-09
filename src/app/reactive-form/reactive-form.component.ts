import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb:FormBuilder){

  }
  options=['JavaScript','Node','EXpress','Angular','TypeScript']
   Gender=['female','Male','other']
   unAllowedName=['Ademola','Christian','Abiodun']
    form!:FormGroup
    ngOnInit(): void {
      this.form= this.fb.group({
        personalDetails:this.fb.group({
        name:['',[Validators.required,this.checkUnAllowedName]],
        email:[null,[Validators.required,Validators.email],[<AsyncValidatorFn>this.checkEmail]],
        password:['',[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')]],
        }),
        comments:[null,[Validators.required]],
        languages:['default',[Validators.required]],
        Gender:['Male',[Validators.required]],
        moreControls:this.fb.array([]),
        langOptions:this.fb.array([])
      })



    }
    onchange(event:Event){
        let value=(event.target as HTMLInputElement).value
        console.log(value);
        const controls= new FormControl(value);
        (this.form.get('langOptions')as FormArray).push(controls)
    }
    

   checkEmail(controls:FormControl):Promise<{[x:string]:Boolean } |null>{
      const promise= new Promise<{[x:string]:Boolean } |null>((resolve,reject)=>{
        if(controls.value==="testemail@gmail.com"){
          setTimeout(()=>{
            resolve ({emailUnallowed:true})
          },1500)
        }
       else{
        resolve(null)
       }
      })
      return promise
   }


   checkUnAllowedName=(controls:FormControl):{[x:string]:boolean} | null=>{
      if(this.unAllowedName.includes(controls.value)){
        return {unAllowedName:true}
      }
      return null
   }





   onSubmit(){ 
    console.log(this.form);
    // this.form.reset()
    
   }
   addLanguage(){
    const controls=new FormControl(null,[Validators.required]);
    (this.form.get('moreControls') as FormArray).push(controls)
   }
   getControls(){
   return (this.form.get('moreControls') as FormArray).controls
   }
   removerControl(i:number){
    (this.form.get('moreControls')as FormArray).removeAt(i)
   }
   prepopulate(){
    this.form.setValue({
      personalDetails:{
        name:'christian abiodun',
        email:'christian@gmail.com',
        password:'12dwWE$fyybve23'
      },
      comments:'Angular is Fun',
      languages:'java',
      Gender:'Female',
      moreControls:[],
      langOptions:[]
    })
  }
  prepopulate1(){
    this.form.patchValue({
      personalDetails:{
        name:'Barmidele Sunmonu abiodun',
        email:'christian@gmail.com'
      },
    })
  }

}
